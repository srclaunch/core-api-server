// import {
//   AuthMissingRefreshTokenException,
//   ExceptionCode,
//   ExceptionRemediator,
// } from '@srclaunch/exceptions';
import {
  CaughtException,
  Exception,
  // CognitoException,
  NullUserException,
} from '@srclaunch/exceptions';
// import Logger from '@srclaunch/logger';
import {
  CommunicationMedium,
  User,
  UserVerificationStatus,
} from '@srclaunch/types';
import { Request, Response } from 'express';
// import {
//   getCognitoUserByEmailAddress,
//   getCognitoUserByUserId,
// } from '../../../lib/core/auth/cognito/users';
// import {
//   getCognitoVerificationDetails,
//   verifyCode,
//   sendVerificationCode,
// } from '../../lib/core/auth/cognito/verification';
// import { getUserById } from '../../lib/core/users';
// const remediator = new ExceptionRemediator();

// const logger = new Logger();

export default {
  getVerificationDetails: async (
    req: Request,
    res: Response,
  ) => {
    /*
    : Promise<
    Response<{
      status?: string;
      delivery?: { medium: string; destination: string };
    }>
  >*/
    try {
    } catch (err) {}
    const { user_id } = req.params;

    console.log('user_id', user_id);
    // const details = await getCognitoVerificationDetails(user_id);

    // console.log('details', details);
    // return res.status(200).json(details);
  },
  sendVerificationCode: async (
    req: Request,
    res: Response,
  ) => {
    /*
    : Promise<Response<{ success: boolean }>>*/
    // const { user_id } = req.body;

    // const user: User | null = (await getUserById(user_id)) as unknown as User;

    // if (!user) {
    //   throw new NullUserException('Failure to find user in database', {});
    // }

    // const { success } = await sendVerificationCode({
    //   emailAddress: user.username,
    // });

    // if (success) {
    //   return res.status(200).json({ success: true });
    // }

    // return res.status(500).json({ success: false });
  },
  verifyCode: async (
    req: Request,
    res: Response,
  ) => {
    /*
    : Promise<
    Response<{
      success?: boolean;
    }>
  >*/
    try {
      // const { user_id, code } = req.body;

      // const user = await getUserById(user_id);

      // if (!user) {
      //   throw new NullUserException('Failure to find user in database', {});
      // }

      // const username: string = user.getDataValue('username');

      // if (!username) {
      //   throw new Exception('No username found for user', {});
      // }

      // const result = await verifyCode({
      //   emailAddress: username,
      //   code,
      // });

      // if (result.success) {
      //   await user.update({
      //     authentication: {
      //       ...user.getDataValue('authentication'),
      //       verification: {
      //         status: UserVerificationStatus.Confirmed,
      //         delivery: {
      //           medium: CommunicationMedium.Email,
      //           destination: username,
      //         },
      //       },
      //     },
      //   });

      //   return res.status(200).json({ success: true });
      // } else {
      //   return res.status(200).json({ success: true, error: result.message });
      // }
    } catch (err: any) {
      throw new CaughtException(
        'Caught exception in user verification endpoint',
        {},
      );
    }
  },
};
