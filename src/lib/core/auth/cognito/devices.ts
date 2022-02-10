import {
  CognitoMissingUserPoolClientIdException,
  CognitoMissingUserPoolIdException,
} from '@srclaunch/exceptions';
// import Logger from '@srclaunch/logger';
import AWS from 'aws-sdk';

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

export async function confirmDevice({
  accessToken,
  deviceKey,
  deviceName,
  passwordVerifier,
  salt,
}: {
  accessToken: string;
  deviceKey: string;
  deviceName?: string;
  passwordVerifier: string;
  salt: string;
}): Promise<{ success: boolean }> {
  if (!AWS_COGNITO_USER_POOL_ID)
    throw new CognitoMissingUserPoolIdException(
      'Missing "AWS_COGNITO_USER_POOL_ID" environment variable',
      {
        origin: {
          file: 'lib/core/auth/cognito/devices.ts',
          function: 'updateDevice()',
        },
      },
    );

  if (!AWS_COGNITO_USER_POOL_CLIENT_ID)
    throw new CognitoMissingUserPoolClientIdException(
      'Missing "AWS_COGNITO_USER_POOL_CLIENT_ID" environment variable',
      {
        origin: {
          file: 'lib/core/auth/cognito/devices.ts',
          function: 'updateDevice()',
        },
      },
    );

  const params = {
    AccessToken: accessToken,
    DeviceKey: deviceKey,
    DeviceName: deviceName,
    DeviceSecretVerifierConfig: {
      PasswordVerifier: passwordVerifier,
      Salt: salt,
    },
  };

  console.log('confirmdevice params', params);

  const cognitoIdentityServiceProvider =
    new AWS.CognitoIdentityServiceProvider();

  const response = await cognitoIdentityServiceProvider
    .confirmDevice(params)
    .promise();

  console.log('confirmdevice response', response);
  return {
    success: true,
  };
  //

  //
  // return cognitoIdentityServiceProvider
  //   .confirmDevice(params)
  //   .promise()
  //   .then(result => {
  //     console.log('result', result);
  //   })
  //   .catch(err => {
  //     console.log('err', err);
  //     throw new Exception(err.name, {});
  //   });
}
