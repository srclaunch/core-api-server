import { Request, Response } from 'express';

// import { sendFeedback } from '../../lib/co';

export const FeedbackEndpoints = {
  sendToContactEmail: async (
    req: Request,
    res: Response,
  ): Promise<Response<void>> => {
    // @ts-ignore
    const user_id = req.user?.id;
    const { email, first_name, last_name, message } = req.body;

    // await sendFeedback({
    //   email,
    //   first_name,
    //   last_name,
    //   message,
    //   user_id,
    // });

    return res.status(204).json();
  },
};
