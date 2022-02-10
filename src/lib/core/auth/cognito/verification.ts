import { AuthenticationExpiredCodeException } from '@srclaunch/exceptions';
import {
  AuthenticationCodeMismatchException,
  AuthenticationCodeDeliveryFailureException,
  AuthenticationException,
  CognitoMissingUserPoolClientIdException,
  CognitoException,
  CaughtException,
} from '@srclaunch/exceptions';
import { CognitoUser, CommunicationMedium } from '@srclaunch/types';
import AWS from 'aws-sdk';
import { getCognitoUserByEmailAddress, getCognitoUserByUserId } from './users';

const {
  AWS_ACCESS_KEY,
  AWS_REGION,
  AWS_SECRET_KEY,
  USER_POOL_ID,
  USER_POOL_CLIENT_ID,
} = process.env;

AWS.config.setPromisesDependency(null);
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  region: AWS_REGION,
  secretAccessKey: AWS_SECRET_KEY,
});

export async function getCognitoVerificationDetails(userId: string): Promise<{
  status: CognitoUser['status'];
  delivery?: { medium: CommunicationMedium; destination?: string };
}> {
  if (!USER_POOL_CLIENT_ID)
    throw new CognitoMissingUserPoolClientIdException(
      'Missing "USER_POOL_CLIENT_ID" environment variable',
      {
        origin: {
          file: 'lib/core/auth/cognito/index.ts',
          function: 'getCognitoVerificationDetails()',
        },
      },
    );

  const cognitoUser = await getCognitoUserByUserId(userId);
  console.log('cognitoUser', cognitoUser);
  // await getCognitoUserByEmailAddress(username);

  if (!cognitoUser) {
    throw new CognitoException('Cognito user not found.', {});
  }

  const userAttributes = cognitoUser.attributes ?? [];

  const emailProp = userAttributes.find(a => a.Name === 'email');
  const emailAddress = emailProp?.Value;

  return {
    delivery: {
      destination: emailAddress,
      medium: CommunicationMedium.Email,
    },
    status: cognitoUser?.status,
  };
}

export async function verifyCode({
  emailAddress,
  code,
}: {
  emailAddress: string;
  code: string;
}) {
  //: Promise<{ success: boolean; message?: string }>
  try {
    // if (!AWS_COGNITO_USER_POOL_CLIENT_ID)
    //   throw new CognitoMissingUserPoolClientIdException(
    //     'Missing "AWS_COGNITO_USER_POOL_CLIENT_ID" environment variable',
    //     {
    //       origin: {
    //         file: 'lib/core/auth/cognito/index.ts',
    //         function: 'signUpInCognito()',
    //       },
    //     },
    //   );
    // const confirmParams = {
    //   ClientId: AWS_COGNITO_USER_POOL_CLIENT_ID,
    //   ConfirmationCode: code,
    //   Username: emailAddress,
    // };
    // const cognitoIdentityServiceProvider =
    //   new AWS.CognitoIdentityServiceProvider();
    // cognitoIdentityServiceProvider.confirmSignUp(confirmParams).promise();
    // return { success: true };
  } catch (err: any) {
    switch (err.name) {
      case 'CodeMismatchException':
        throw new AuthenticationCodeMismatchException(
          'Verification code mismatch',
          {
            cause: err,
          },
        );
      case 'ExpiredCodeException':
        throw new AuthenticationExpiredCodeException(
          'Verification code expired',
          {
            cause: err,
          },
        );
      default:
        throw new AuthenticationException('Verification failed', {
          cause: err,
        });
    }
  }
}

export async function sendVerificationCode({
  emailAddress,
}: {
  emailAddress: string;
}) {
  /*
  : Promise<{
  success: boolean;
}>*/
  try {
    // if (!AWS_COGNITO_USER_POOL_CLIENT_ID)
    //   throw new CognitoMissingUserPoolClientIdException(
    //     'Missing "AWS_COGNITO_USER_POOL_CLIENT_ID" environment variable',
    //     {
    //       origin: {
    //         file: 'lib/core/auth/cognito/verification.ts',
    //         function: 'sendVerificationCode()',
    //       },
    //     },
    //   );
    // const resendConfirmationCodeParams = {
    //   ClientId: AWS_COGNITO_USER_POOL_CLIENT_ID,
    //   Username: emailAddress,
    // };
    // const cognitoIdentityServiceProvider =
    //   new AWS.CognitoIdentityServiceProvider();
    // await cognitoIdentityServiceProvider
    //   .resendConfirmationCode(resendConfirmationCodeParams)
    //   .promise();
    // return {
    //   success: true,
    // };
  } catch (err: any) {
    switch (err.name) {
      case 'CodeDeliveryFailureException':
        throw new AuthenticationCodeDeliveryFailureException(
          'Failure to send verification code.',
          {},
        );
      default:
        throw new CaughtException(
          'Exception caught while resending verification code.',
          {},
        );
    }
  }
}
