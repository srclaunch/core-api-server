import { NullUserException } from '@srclaunch/exceptions';
import { User } from '@srclaunch/types';
import { Request, Response } from 'express';

// import {
//   deleteUserAccount,
//   getUserById,
//   updateUserById,
// } from '../../lib/core/users';

export const UserEndpoints = {
  delete: async (req: Request, res: Response): Promise<Response<void>> => {
    // @ts-ignore
    const user_id = req.user?.id;

    // await deleteUserAccount(user_id);

    return res.status(200).json();
  },
  getOne: async (
    req: Request,
    res: Response,
  ) => {
  // : Promise<Response<Partial<User>>> => 
  
    // @ts-ignore
    const user_id = req.user?.id;

    // const user = await getUserById(user_id);

    // if (!user) {
      // throw new NullUserException(`No user for user_id=${user_id}`, {
      //   file: 'endpoints/user/index.ts',
      //   func: 'getOne()',
      //   scope: 'User',
      // });
    // }

    // const {
    //   account_sync_active,
    //   active_account_sync_accounts,
    //   available_account_syncs,
    //   first_name,
    //   id,
    //   last_name,
    //   preferences,
    //   login_count,
    //   email_address,
    //   premium_membership_active,
    // } = user;

    // return res.status(200).json({
    //   account_sync_active,
    //   active_account_sync_accounts,
    //   available_account_syncs,
    //   email_address,
    //   first_name,
    //   id,
    //   last_name,
    //   login_count,
    //   preferences,
    //   premium_membership_active,
    // });
  },
  updatePreferences: async (
    req: Request,
    res: Response,
  ) => {
   //Promise<Response<Partial<User>>>
    // @ts-ignore
    const user_id = req.user?.id;
    // const user = await updateUserById(user_id, req.body.property);

    // const {
    //   first_name,
    //   id,
    //   last_name,
    //   preferences,
    //   login_count,
    //   email_address,
    // } = user;

    // return res.status(200).json({
    //   email_address,
    //   first_name,
    //   id,
    //   last_name,
    //   login_count,
    //   preferences,
    // });
  },
};
