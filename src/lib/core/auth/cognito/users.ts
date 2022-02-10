import {
  AuthenticationUserNotFoundException,
  // AuthExpiredRefreshTokenException,
  // AuthInvalidCredentialsException,
  // AuthUsernameExistsException,
  // AuthenticationException,
  // CognitoMissingUserPoolClientIdException,
  CognitoMissingUserPoolIdException,
  Exception,
  // Exception,
  // MissingPropertyException,
  // DatabaseException,
  // NullUserException,
} from '@srclaunch/exceptions';
// import Logger from '@srclaunch/logger';
import { CognitoUser, User, UserVerificationStatus } from '@srclaunch/types';
import AWS from 'aws-sdk';
// import { db } from '../../../../utils/db';

// const logger = new Logger();

const { AWS_ACCESS_KEY, AWS_REGION, AWS_SECRET_KEY, USER_POOL_ID } =
  process.env;

AWS.config.setPromisesDependency(null);
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  region: AWS_REGION,
  secretAccessKey: AWS_SECRET_KEY,
});

export async function deleteUser(email: string): Promise<true> {
  if (!USER_POOL_ID)
    throw new CognitoMissingUserPoolIdException(
      'Missing "USER_POOL_ID" environment variable',
      {
        origin: {
          file: 'lib/core/auth/cognito/index.ts',
          function: 'deleteUser()',
        },
      },
    );

  const params = {
    UserPoolId: USER_POOL_ID,
    Username: email,
  };

  const cognitoIdentityServiceProvider =
    new AWS.CognitoIdentityServiceProvider();

  await cognitoIdentityServiceProvider.adminDeleteUser(params).promise();

  return true;
}

export async function getUserDevice() {}

export async function confirmUserDevice() {}

export async function getCognitoUserByUserId(
  id: User['id'],
): Promise<CognitoUser | null> {
  try {
    if (!USER_POOL_ID) {
      throw new CognitoMissingUserPoolIdException(
        'Missing "USER_POOL_ID" environment variable',
        {
          origin: {
            file: 'lib/core/auth/cognito/index.ts',
            function: 'getCognitoUserByUserId()',
          },
        },
      );
    }

    console.log('id', id);

    // if (!db || !db.sequelize) {
    //   throw new DatabaseException('Database connection not initialized', {});
    // }
    //
    // const user: User | null = (await db.sequelize.models['User'].findOne({
    //   where: {
    //     id,
    //   },
    // })) as unknown as User;
    //
    // if (!user) {
    //   throw new NullUserException('Could not find User with given id.', {});
    // }
    //
    // const emailAddress = user?.username;

    const filterByUsernameParams = {
      UserPoolId: USER_POOL_ID,
      Username: id,
    };

    console.log('filterByUsernameParams', filterByUsernameParams);
    const cognitoIdentityServiceProvider =
      new AWS.CognitoIdentityServiceProvider();
    const userDetails = await cognitoIdentityServiceProvider
      .adminGetUser(filterByUsernameParams)
      .promise();

    console.log('userDetails', userDetails);
    const { UserAttributes, Username, UserStatus } = userDetails;

    return {
      attributes: UserAttributes,
      status: UserStatus as UserVerificationStatus,
      username: Username,
    };
  } catch (err: any) {
    switch (err.name) {
      case 'UserNotFoundException':
        throw new AuthenticationUserNotFoundException(
          'User not found for verification status',
          {
            cause: err,
          },
        );
      default:
        throw new Exception('Failure retrieving user verification status', {
          cause: err,
        });
    }
  }
}

export async function getCognitoUserByEmailAddress(
  emailAddress: string,
): Promise<CognitoUser | null> {
  try {
    if (!USER_POOL_ID)
      throw new CognitoMissingUserPoolIdException(
        'Missing "USER_POOL_ID" environment variable',
        {
          origin: {
            file: 'lib/core/auth/cognito/index.ts',
            function: 'getCognitoUserByEmailAddress()',
          },
        },
      );

    const filterByUsernameParams = {
      UserPoolId: USER_POOL_ID,
      Username: emailAddress,
    };

    const cognitoIdentityServiceProvider =
      new AWS.CognitoIdentityServiceProvider();
    const userDetails = await cognitoIdentityServiceProvider
      .adminGetUser(filterByUsernameParams)
      .promise();

    console.log('userDetails', userDetails);
    const { UserAttributes, Username, UserStatus } = userDetails;

    return {
      attributes: UserAttributes,
      status: UserStatus as UserVerificationStatus,
      username: Username,
    };
  } catch (err: any) {
    switch (err.name) {
      case 'UserNotFoundException':
        return null;
      default:
        console.log('err', err);

        return null;
    }
  }
}
