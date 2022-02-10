import { Request, Response } from 'express';

export const ChangePasswordEndpoints = {
  changePassword: async (req: Request, res: Response) => {
    try {
      // Add logic here
    } catch (err) {
      return res.status(500).send({ error: true, message: 'UNKNOWN_ERROR' });
    }
  },
};
