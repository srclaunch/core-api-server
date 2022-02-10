import { Request, Response } from 'express';
// import { confirmDevice } from '../../lib/core/auth/cognito/devices';
import { Exception } from '@srclaunch/exceptions';

// import { getUserById, setUserConfirmed } from '../../../lib/core/users';
// import { db } from '../../../utils/db';

// const { User } = db.sequelize?.models;

export default {
  confirmDevice: async (req: Request, res: Response) => {
    //: Promise<Response<unknown>>
    const { access_token, device_key, device_name, password_verifier, salt } =
      req.body;

    // const response = await confirmDevice({
    //   accessToken: access_token,
    //   deviceKey: device_key,
    //   deviceName: device_name,
    //   passwordVerifier: password_verifier,
    //   salt,
    // });

    // if (response.success) {
    //   return res.status(200).send({
    //     success: true,
    //   });
    // }
  },
};
