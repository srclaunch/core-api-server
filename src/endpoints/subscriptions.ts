import { Subscription } from '@srclaunch/types';
import { Request, Response } from 'express';

// import {
//   cancelSubscription,
//   createSubscription,
//   deleteAllUserSubscriptions,
//   getSubscriptionById,
//   getSubscriptionsByUserId,
// } from '../../lib/core/entities/subscriptions';

// TODO: [BBWA-132] Ensure the user hasn't alraeady had a free trial before letting them create one (ensure no bad actors)

export const SubscriptionEndpoints = {
  cancel: async (req: Request, res: Response): Promise<Response<void>> => {
        // @ts-ignore
    const user_id = req.user?.id;
    const { subscriptionId } = req.params;

    // await cancelSubscription(subscriptionId, { user_id });

    return res.status(200).json({});
  },
  create: async (
    req: Request,
    res: Response,
  ) => {
    //: Promise<Response<Subscription>>
    const { account_id, payment_method_id, product_id, free_trial } = req.body;
        // @ts-ignore
    const user_id = req.user?.id;

    // const subscription = await createSubscription({
    //   account_id,
    //   free_trial,
    //   payment_method_id,
    //   product_id,
    //   user_id,
    // });

    // return res.status(200).json(subscription);
  },
  deleteAll: async (req: Request, res: Response) => {
    //: Promise<Response<void>>
    // @ts-ignore
    const user_id = req.user?.id;

    // await deleteAllUserSubscriptions(user_id);

    return res.status(200).json({});
  },
  getOne: async (
    req: Request,
    res: Response,
  ) => {
    //: Promise<Response<Subscription>>
    // @ts-ignore
    const user_id = req.user?.id;
    const { subscriptionId } = req.params;

    // const subscription = await getSubscriptionById(subscriptionId, { user_id });

    // return res.status(200).json(subscription);
  },
  list: async (
    req: Request,
    res: Response,
  ) => {
    //: Promise<Response<Subscription[]>>
        // @ts-ignore
    // const user_id = req.user?.id;

    // const subscriptions = await getSubscriptionsByUserId(user_id);

    // return res.status(200).json(subscriptions);
  },
};
