import {
  AuthenticationUsernameExistsException,
  CognitoMissingUserPoolClientIdException,
  Exception,
} from '@srclaunch/exceptions';
// import Logger from '@srclaunch/logger';
import AWS from 'aws-sdk';
import { getCognitoUserByEmailAddress } from './users';

const { AWS_ACCESS_KEY, AWS_REGION, AWS_SECRET_KEY, USER_POOL_CLIENT_ID } =
  process.env;

AWS.config.setPromisesDependency(null);
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  region: AWS_REGION,
  secretAccessKey: AWS_SECRET_KEY,
});

export async function signUpInCognito({
  first_name,
  last_name,
  password,
  username,
}: {
  first_name: string;
  last_name: string;
  password: string;
  username: string;
}): Promise<{
  exception_code?: unknown;
  cognito_id?: string;
  delivery_details?: {
    destination?: string;
    medium?: string;
  };
}> {
  try {
    if (!USER_POOL_CLIENT_ID)
      throw new CognitoMissingUserPoolClientIdException(
        'Missing "TEST_USER_POOL_CLIENT_ID" environment variable',
        {
          origin: {
            file: 'lib/core/auth/cognito/index.ts',
            function: 'signUpInCognito()',
          },
        },
      );

    const params = {
      ClientId: USER_POOL_CLIENT_ID,
      Password: password,
      UserAttributes: [
        {
          Name: 'name',
          Value: first_name,
        },
        {
          Name: 'family_name',
          Value: last_name,
        },
      ],
      Username: username,
    };

    const cognitoIdentityServiceProvider =
      new AWS.CognitoIdentityServiceProvider();
    const response = await cognitoIdentityServiceProvider
      .signUp(params)
      .promise();

    return {
      cognito_id: response.UserSub,
      delivery_details: {
        destination: response.CodeDeliveryDetails?.Destination,
        medium: response.CodeDeliveryDetails?.DeliveryMedium,
      },
    };
  } catch (err: any) {
    console.log('err.name', err.name);

    switch (err.name) {
      case 'UsernameExistsException':
        throw new AuthenticationUsernameExistsException(
          `Username "${username}" already taken.`,
          {},
        );
    }

    console.log(err);
    throw new Exception('Failure during signup', { cause: err });
  }
}

export async function checkUsernameAvailability({
  username,
}: {
  username: string;
}): Promise<boolean> {
  try {
    if (!USER_POOL_CLIENT_ID)
      throw new CognitoMissingUserPoolClientIdException(
        'Missing "USER_POOL_CLIENT_ID" environment variable',
        {
          origin: {
            file: 'lib/core/auth/cognito/index.ts',
            function: 'checkUsernameAvailability()',
          },
        },
      );

    const user = await getCognitoUserByEmailAddress(username);

    if (user) {
      return false;
    }
    return true;
  } catch (err: any) {
    switch (err.name) {
      case 'UserNotFoundException':
        return true;
      default:
        throw new Exception('Failure during username availability check', {
          cause: err,
        });
    }
  }
}
