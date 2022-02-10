// import Cookies from 'cookies';
import { getEnvironment } from '@srclaunch/node-environment';
import { Request, Response } from 'express';

// import { getSigningKeys } from '../../lib/utils/crypto';

export const LogoutEndpoints = {
  logout: async (req: Request, res: Response): Promise<void> => {
    // TODO: Invalidate tokens and actually remove cookie
    // const keys = getSigningKeys();
    // const cookies = new Cookies(req, res, { keys });
    // cookies.set('refresh_token', null, {
    //   domain:
    //     getEnvironment().id === 'dev' ? 'localhost' : 'budgetbloom.com',
    //   path: '/auth/token',
    //   secure: getEnvironment().id !== 'dev',
    //   signed: true,
    // });
  },
};
