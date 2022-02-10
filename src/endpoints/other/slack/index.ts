import { Request, Response } from 'express';

// import { sendInvite } from '../../../lib/core/slack';

export const SlackEndpoints = {
  sendToContactEmail: async (
    req: Request,
    res: Response,
  ): Promise<Response<void>> => {
    const { email }: { email: string } = req.body;

    // await sendInvite(email);

    return res.status(200).json({});
  },
};
