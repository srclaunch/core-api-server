import {
  CognitoMissingUserPoolClientIdException,
  CognitoMissingUserPoolIdException,
  MissingPropertyException,
} from '@srclaunch/exceptions';

import {
  AuthenticationChallengeDetails,
  AuthenticationDeviceDetails,
  AuthenticationTokens,
} from '@srclaunch/types';
import AWS from 'aws-sdk';

const {
  // AWS_ACCESS_KEY,
  // AWS_REGION,
  // AWS_SECRET_KEY,
  AWS_COGNITO_USER_POOL_ID,
  AWS_COGNITO_USER_POOL_CLIENT_ID,
} = process.env;

// if (!AWS_ACCESS_KEY)
//   throw new CognitoMissingUserPoolIdException(
//     'Missing "AWS_ACCESS_KEY" environment variable',
//     {
//       origin: {
//         file: 'lib/core/auth/cognito/login.ts',
//       },
//     },
//   );

// if (!AWS_REGION)
//   throw new CognitoMissingUserPoolClientIdException(
//     'Missing "AWS_REGION" environment variable',
//     {
//       origin: {
//         file: 'lib/core/auth/cognito/login.ts',
//       },
//     },
//   );
// if (!AWS_SECRET_KEY)
//   throw new CognitoMissingUserPoolIdException(
//     'Missing "AWS_SECRET_KEY" environment variable',
//     {
//       origin: {
//         file: 'lib/core/auth/cognito/login.ts',
//       },
//     },
//   );

AWS.config.setPromisesDependency(null);
// AWS.config.update({
//   accessKeyId: AWS_ACCESS_KEY,
//   region: AWS_REGION,
//   secretAccessKey: AWS_SECRET_KEY,
// });

function getChallengeResponse(
  challengeName: string,
  challengeParameters: Record<string, unknown>,
): AuthenticationChallengeDetails {
  switch (challengeName) {
    case 'SELECT_MFA_TYPE':
    /*
      Selects the MFA type. Valid MFA options are SMS_MFA for text SMS MFA,
      and SOFTWARE_TOKEN_MFA for TOTP software token MFA.
    */
    case 'SMS_MFA':
    /*
      Next challenge is to supply an SMS_MFA_CODE, delivered via SMS.
    */
    case 'PASSWORD_VERIFIER':
    /*
      Next challenge is to supply PASSWORD_CLAIM_SIGNATURE, PASSWORD_CLAIM_SECRET_BLOCK,
      and TIMESTAMP after the client-side SRP calculations.
    */
    case 'CUSTOM_CHALLENGE':
    /*
      This is returned if your custom authentication flow determines that the user should
      pass another challenge before tokens are issued.
    */
    case 'DEVICE_SRP_AUTH':
    /*
      If device tracking was enabled on your user pool and the previous challenges were
      passed, this challenge is returned so that Amazon Cognito can start tracking this
      device.
    */
    case 'DEVICE_PASSWORD_VERIFIER':
    /*
      Similar to PASSWORD_VERIFIER, but for devices only.
    */
    case 'ADMIN_NO_SRP_AUTH':
    /*
      This is returned if you need to authenticate with USERNAME and PASSWORD directly.
      An app client must be enabled to use this flow.
    */
    case 'NEW_PASSWORD_REQUIRED':
    /*
      For users who are required to change their passwords after successful first login.
      This challenge should be passed with NEW_PASSWORD and any other required attributes.
    */
    case 'MFA_SETUP':
    /*
      If MFA is required, users who do not have at least one of the MFA
      methods set up are presented with an MFA_SETUP challenge.

      The user must set up at least one MFA type to continue to authenticate.

      For users who are required to setup an MFA factor before they can sign-in.
      The MFA types enabled for the user pool will be listed in the challenge parameters
      MFA_CAN_SETUP value.

      To setup software token MFA, use the session returned here from InitiateAuth as
      an input to AssociateSoftwareToken, and use the session returned by
      VerifySoftwareToken as an input to RespondToAuthChallenge with challenge name
      MFA_SETUP to complete sign-in.

      To setup SMS MFA, users will need help from an administrator to add a phone number
      to their account and then call InitiateAuth again to restart sign-in.
    */
  }

  return {
    name: challengeName,
    parameters: challengeParameters,
  };
}

export async function login({
  username,
  password,
  fingerprint,
}: {
  username: string;
  password: string;
  fingerprint: {
    deviceKey?: string;
    encodedData: string;
    httpHeaders: { headerName: string; headerValue: string }[];
    ipAddress: string;
    serverName: string;
    serverPath: string;
  };
}): Promise<
  | { challenge: AuthenticationChallengeDetails }
  | {
      newDevice?: AuthenticationDeviceDetails | null;
      tokens: AuthenticationTokens;
    }
> {
  if (!AWS_COGNITO_USER_POOL_ID)
    throw new CognitoMissingUserPoolIdException(
      'Missing "AWS_COGNITO_USER_POOL_ID" environment variable',
      {
        origin: {
          file: 'lib/core/auth/cognito/login.ts',
        },
      },
    );

  if (!AWS_COGNITO_USER_POOL_CLIENT_ID)
    throw new CognitoMissingUserPoolClientIdException(
      'Missing "AWS_COGNITO_USER_POOL_CLIENT_ID" environment variable',
      {
        origin: {
          file: 'lib/core/auth/cognito/login.ts',
        },
      },
    );

  const {
    deviceKey,
    encodedData,
    httpHeaders,
    ipAddress,
    serverName,
    serverPath,
  } = fingerprint;

  const credentials = { PASSWORD: password, USERNAME: username };
  const device = { DEVICE_KEY: deviceKey };
  const deviceProp = deviceKey ? device : {};

  const params = {
    AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
    AuthParameters: {
      ...credentials,
      ...deviceProp,
    },
    ContextData: {
      EncodedData: encodedData,
      HttpHeaders: httpHeaders,
      IpAddress: ipAddress,
      ServerName: serverName,
      ServerPath: serverPath,
    },
    ClientId: AWS_COGNITO_USER_POOL_CLIENT_ID,
    UserPoolId: AWS_COGNITO_USER_POOL_ID,
  };

  console.log('auth with pw params', params);
  const cognitoIdentityServiceProvider =
    new AWS.CognitoIdentityServiceProvider();

  const result = await cognitoIdentityServiceProvider
    .adminInitiateAuth(params)
    .promise();

  console.log('rsult from pw auth', result);
  const { AuthenticationResult, ChallengeName, ChallengeParameters } = result;

  if (ChallengeName && ChallengeParameters) {
    const { name, parameters } = getChallengeResponse(
      ChallengeName,
      ChallengeParameters,
    );

    return {
      challenge: {
        name,
        parameters,
      },
    };
  }

  if (!AuthenticationResult) {
    throw new MissingPropertyException(
      'Login response is missing "AuthenticationResult" property',
      {},
    );
  }

  const { AccessToken, ExpiresIn, IdToken, NewDeviceMetadata, RefreshToken } =
    AuthenticationResult;
  const t = new Date();

  if (!AccessToken || !RefreshToken || !IdToken) {
    throw new MissingPropertyException(
      'AuthenticationResult is missing AccessToken or RefreshToken or IdToken property',
      {},
    );
  }

  return {
    newDevice: NewDeviceMetadata
      ? {
          key: NewDeviceMetadata.DeviceKey,
          groupKey: NewDeviceMetadata.DeviceGroupKey,
        }
      : null,
    tokens: {
      accessToken: AccessToken,
      expiration: new Date(
        t.setSeconds(t.getSeconds() + (ExpiresIn ?? 3600)),
      ).toString(),
      idToken: IdToken,
      refreshToken: RefreshToken,
    },
  };
}

export async function authenticateToken({
  fingerprint,
  refreshToken,
}: {
  fingerprint: {
    deviceKey: string;
    encodedData: string;
    httpHeaders: { headerName: string; headerValue: string }[];
    ipAddress: string;
    serverName: string;
    serverPath: string;
  };
  refreshToken: string;
}): Promise<{
  newDevice?: AuthenticationDeviceDetails | null;
  tokens: AuthenticationTokens;
}> {
  if (!AWS_COGNITO_USER_POOL_ID)
    throw new CognitoMissingUserPoolIdException(
      'Missing "AWS_COGNITO_USER_POOL_ID" environment variable',
      {
        origin: {
          file: 'lib/core/auth/cognito/index.ts',
          function: 'getCognitoUserByEmail()',
        },
      },
    );

  if (!AWS_COGNITO_USER_POOL_CLIENT_ID)
    throw new CognitoMissingUserPoolClientIdException(
      'Missing "AWS_COGNITO_USER_POOL_CLIENT_ID" environment variable',
      {
        origin: {
          file: 'lib/core/auth/cognito/index.ts',
          function: 'signUpInCognito()',
        },
      },
    );

  const {
    deviceKey,
    encodedData,
    httpHeaders,
    ipAddress,
    serverName,
    serverPath,
  } = fingerprint;

  const params = {
    AuthFlow: 'REFRESH_TOKEN_AUTH',
    AuthParameters: {
      DEVICE_KEY: deviceKey,
      REFRESH_TOKEN: refreshToken,
    },
    ContextData: {
      EncodedData: encodedData,
      HttpHeaders: httpHeaders,
      IpAddress: ipAddress,
      ServerName: serverName,
      ServerPath: serverPath,
    },
    ClientId: AWS_COGNITO_USER_POOL_CLIENT_ID,
    UserPoolId: AWS_COGNITO_USER_POOL_ID,
  };

  console.log('auth with token params', params);
  const cognitoIdentityServiceProvider =
    new AWS.CognitoIdentityServiceProvider();

  const result = await cognitoIdentityServiceProvider
    .adminInitiateAuth(params)
    .promise();

  console.log('result from auth token', result);

  if (!result.AuthenticationResult) {
    throw new MissingPropertyException('result.AuthenticationResult', {
      origin: {
        file: 'lib/cognito/index.ts',
        function: 'authenticateWithToken()',
      },
    });
  }

  const { AccessToken, RefreshToken, IdToken, ExpiresIn, NewDeviceMetadata } =
    result?.AuthenticationResult;

  if (!AccessToken || !RefreshToken) {
    throw new MissingPropertyException(
      'AuthenticationResult is missing AccessToken or RefreshToken property',
      {},
    );
  }

  const t = new Date();

  return {
    newDevice: NewDeviceMetadata
      ? {
          key: NewDeviceMetadata.DeviceKey,
          groupKey: NewDeviceMetadata.DeviceGroupKey,
        }
      : null,
    tokens: {
      accessToken: AccessToken,
      expiration: new Date(
        t.setSeconds(t.getSeconds() + (ExpiresIn ?? 3600)),
      ).toString(),
      idToken: IdToken ?? '',
      refreshToken: RefreshToken,
    },
  };
}
