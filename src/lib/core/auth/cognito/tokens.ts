import {
  CognitoMissingUserPoolClientIdException,
  CognitoMissingUserPoolIdException,
  MissingPropertyException,
} from '@srclaunch/exceptions';
// import Logger from '@srclaunch/logger';

import AWS from 'aws-sdk';
import { AuthenticationTokens } from '@srclaunch/types';

const {
  AWS_ACCESS_KEY,
  AWS_REGION,
  AWS_SECRET_KEY,
  AWS_COGNITO_USER_POOL_ID,
  AWS_COGNITO_USER_POOL_CLIENT_ID,
} = process.env;

AWS.config.setPromisesDependency(null);
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  region: AWS_REGION,
  secretAccessKey: AWS_SECRET_KEY,
});

export async function refreshToken({
  deviceKey,
  refreshToken,
}: {
  deviceKey: string;
  refreshToken: string;
}): Promise<{
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

  const params = {
    AuthFlow: 'REFRESH_TOKEN',
    AuthParameters: {
      DEVICE_KEY: deviceKey,
      REFRESH_TOKEN: refreshToken,
    },
    ClientId: AWS_COGNITO_USER_POOL_CLIENT_ID,
    UserPoolId: AWS_COGNITO_USER_POOL_ID,
  };

  const cognitoIdentityServiceProvider =
    new AWS.CognitoIdentityServiceProvider();

  const result = await cognitoIdentityServiceProvider
    .adminInitiateAuth(params)
    .promise();

  console.log('result from cognito', result);

  const { AuthenticationResult } = result;

  if (!AuthenticationResult) {
    throw new MissingPropertyException(
      '"AuthenticationResult" is missing in authentication response.',
      {},
    );
  }
  const { AccessToken, ExpiresIn, IdToken, RefreshToken } =
    AuthenticationResult;

  const t = new Date();

  if (!AccessToken || !RefreshToken || !IdToken) {
    throw new MissingPropertyException(
      'AuthenticationResult is missing AccessToken or RefreshToken or IdToken property',
      {},
    );
  }

  return {
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
