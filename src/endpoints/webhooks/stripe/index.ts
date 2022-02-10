import { Request, Response } from 'express';

// import { setSubscriptionInactiveViaStripeWebhook } from '../../../lib/core/entities/subscriptions';
// import { constructEventWithSignature } from '../../../lib/core/stripe';

// TODO: [BBWA-133] Handle all of the web hook cases

export const StripeWebhookEndpoints = {
  webhook: async (
    req: Request,
    res: Response,
  )  => {
    //Promise<Response<{ received: true; handled: boolean }>>
    const signature = req.headers['stripe-signature'];
    // const event = constructEventWithSignature({
    //   requestBody: req.body,
    //   signature,
    // });

    // if (!event) {
    //   return res.status(500).json({
    //     error: true,
    //     handled: false,
    //     received: true,
    //   });
    // }

    // switch (event.type) {
    //   case 'payment_intent.succeeded': {
    //     return res.status(200).json({
    //       handled: false,
    //       received: true,
    //     });
    //   }
    //   case 'payment_method.attached': {
    //     return res.status(200).json({
    //       handled: false,
    //       received: true,
    //     });
    //   }
    //   case 'customer.subscription.deleted': {
    //     const subscription = event.data.object;
    //     const customerId = subscription.customer;

    //     await setSubscriptionInactiveViaStripeWebhook({
    //       stripeCustomerId: customerId,
    //       stripeSubscriptionId: subscription.id,
    //     });

    //     return res.status(200).json({
    //       handled: true,
    //       received: true,
    //     });
    //   }
    //   case 'customer.subscription.updated': {
    //     const subscription = event.data.object;
    //     const customerId = subscription.customer;

    //     if (subscription.status === 'past_due') {
    //       await setSubscriptionInactiveViaStripeWebhook({
    //         stripeCustomerId: customerId,
    //         stripeSubscriptionId: subscription.id,
    //       });
    //     }

    //     return res.status(200).json({
    //       handled: true,
    //       received: true,
    //     });
    //   }
    //   default:
    //     return res.status(200).json({
    //       event_type: event.type,
    //       handled: false,
    //       received: true,
    //     });
    // }
  },
};
