import {
  StripeException,
  StripePaymentMethodRequiredException,
  StripeSubscriptionCreationFailedException,
} from '@srclaunch/exceptions';
import {
  // @ts-ignore
  Account,
  PaymentIntentStatus,
  PaymentMethod,
  // ProductPlans,
  Subscription,
  User,
} from '@srclaunch/types';
import { DateTime } from 'luxon';
import Stripe from 'stripe';

// import db from '../../../../models/core';
import {
  createStripeSubscription,
  getStripeCustomerId,
  removeSubscription,
} from '../../stripe';
// import {
//   decrementUserPropertyVal,
//   getUserByStripeId,
//   setUserPremiumMembershipStatus,
// } from '../../users';
// import {
//   getUserById,
//   incrementUserPropertyVal,
//   updateUserById,
// } from '../../users';
// import { setDefaultPaymentMethod } from '../payment-methods';

// @ts-ignore
const { Subscription: SubscriptionDb } = db;

export async function createSubscription({
  account_id,
  payment_method_id,
  // product_id,
  user_id,
  free_trial = false,
}: {
  account_id: Account['id'];
  payment_method_id: PaymentMethod['id'];
  // product_id: ProductPlans.AccountSync | ProductPlans.PremiumMembership;
  user_id: User['id'];
  free_trial: boolean;
  // @ts-ignore
}): Promise<Subscription> | void {
  // const user = await getUserById(user_id);
  // const stripeCustomerId = await getStripeCustomerId({
  //   firstName: user.first_name,
  //   lastName: user.last_name,
  //   user_id,
  // });
  // if (stripeCustomerId) {
  //   if (payment_method_id) {
  //     await setDefaultPaymentMethod(payment_method_id, {
  //       stripeCustomerId,
  //       user_id,
  //     });
  //   }
  // const accountSyncPlanItem = {
  //   price: config.stripe.accountSyncPriceId,
  // };
  // const premiumMembershipPlanItem = {
  //   price: config.stripe.premiumMembershipPriceId,
  // };
  // const subscriptionPlanItem =
  //   product_id === ProductPlans.AccountSync
  //     ? accountSyncPlanItem
  //     : premiumMembershipPlanItem;
  // const freeTrialEndDate = DateTime.now().plus({ month: 1 });
  // const trialEndDateSeconds = freeTrialEndDate.toSeconds();
  // const stripeSubscription = await createStripeSubscription({
  //   freeTrial: free_trial,
  //   stripeCustomerId,
  //   subscriptionPlanItem,
  //   trialEndDate: trialEndDateSeconds,
  // });
  //   if (!stripeSubscription) {
  //     throw new StripeSubscriptionCreationFailedException(
  //       `Stripe subscription failed, stripeCustomerId=${stripeCustomerId}, subscriptionPlanItem=${subscriptionPlanItem}`,
  //       null,
  //       {
  //         context: {
  //           stripeCustomerId,
  //           subscriptionPlanItem,
  //         },
  //         file: 'lib/subscriptions.ts',
  //         func: 'createSubscription()',
  //       },
  //     );
  //   }
  //   const invoice = stripeSubscription?.latest_invoice;
  //   // @ts-expect-error - Something wrong with Plaid?
  //   const status = invoice?.payment_intent?.status;
  //   switch (status) {
  //     case PaymentIntentStatus.Succeeded:
  //       {
  //         const subscription = await SubscriptionDb.create({
  //           AccountId: account_id ? account_id : null,
  //           PaymentMethodId: payment_method_id,
  //           UserId: user_id,
  //           active: true,
  //           active_end_date: new Date(
  //             stripeSubscription.current_period_end * 1000,
  //           ),
  //           active_start_date: new Date(
  //             stripeSubscription.current_period_start * 1000,
  //           ),
  //           created: new Date(),
  //           product_id,
  //           stripe_id: stripeSubscription.id,
  //           trial_membership_active: free_trial,
  //           trial_membership_ends: free_trial ? freeTrialEndDate : undefined,
  //         });
  //         if (product_id === ProductPlans.PremiumMembership) {
  //           await updateUserById(user_id, {
  //             premium_membership: true,
  //           });
  //         } else if (product_id === ProductPlans.AccountSync) {
  //           await incrementUserPropertyVal(user_id, {
  //             count: 1,
  //             field: 'available_account_syncs',
  //           });
  //           await updateUserById(user_id, {
  //             account_sync_active: true,
  //           });
  //           return subscription;
  //         }
  //       }
  //       break;
  //     case 'requires_payment_method': {
  //       throw new StripePaymentMethodRequiredException(
  //         'Subscription creation failed due to payment method failure.',
  //         null,
  //         {
  //           context: {
  //             payment_method_id,
  //             stripeCustomerId,
  //             subscriptionPlanItem,
  //           },
  //           file: 'lib/subscriptions.ts',
  //         },
  //       );
  //     }
  //     default:
  //       throw new StripeException(
  //         `Payment intent status ${status} unhandled when creating subscription`,
  //         null,
  //         {
  //           context: {
  //             payment_method_id,
  //             stripeCustomerId,
  //             subscriptionPlanItem,
  //           },
  //           user: {
  //             id: user_id,
  //           },
  //         },
  //       );
  //   }
  // }
  // throw new StripeException(
  //   `Reached end of method without returning a 'Subscription' or throwing`,
  //   null,
  //   {
  //     context: {
  //       payment_method_id,
  //       stripeCustomerId,
  //     },
  //     user: {
  //       id: user_id,
  //     },
  //   },
  // );
}
// }

export async function deleteAllUserSubscriptions(
  id: User['id'],
): Promise<void> {
  const subscriptions = await SubscriptionDb.findAll({
    where: {
      UserId: id,
    },
  });

  for (const subscription of subscriptions) {
    const stripeId = subscription.stripe_id;

    await removeSubscription(stripeId);

    await subscription.destroy();
  }
}

export async function getSubscriptionsByUserId(
  id: User['id'],
): Promise<Subscription[]> {
  const subscriptions = await SubscriptionDb.findAll({
    where: {
      UserId: id,
    },
  });

  return subscriptions;
}

export async function getSubscriptionById(
  id: Subscription['id'],
  { user_id }: { user_id: User['id'] },
): Promise<Subscription> {
  const subscription = await SubscriptionDb.findOne({
    where: {
      UserId: user_id,
      id,
    },
  });

  return subscription;
}

export async function getSubscriptionByStripeId(
  id: Subscription['id'],
  { user_id }: { user_id: User['id'] },
): Promise<Subscription> {
  const subscription = await SubscriptionDb.findOne({
    where: {
      UserId: user_id,
      id,
    },
  });

  return subscription;
}

export async function setSubscriptionStatusById(
  id: Subscription['id'],
  {
    status,
    user_id,
  }: {
    status:
      | 'incomplete'
      | 'incomplete_expired'
      | 'trialing'
      | 'active'
      | 'past_due'
      | 'canceled'
      | 'unpaid';
    user_id: User['id'];
  },
): Promise<Subscription> {
  const subscription = await SubscriptionDb.update(
    {
      status,
    },
    {
      where: {
        UserId: user_id,
        id,
      },
    },
  );

  return subscription;
}

export async function setSubscriptionActiveById(
  id: Subscription['id'],
  { active, user_id }: { active: boolean; user_id: User['id'] },
): Promise<Subscription> {
  const subscription = await SubscriptionDb.update(
    {
      active,
    },
    {
      where: {
        UserId: user_id,
        id,
      },
    },
  );

  return subscription;
}

export async function cancelSubscription(
  id: Subscription['id'],
  { user_id }: { user_id: User['id'] },
): Promise<void> {
  const subscription = await SubscriptionDb.findOne({
    where: { UserId: user_id, id },
  });

  await removeSubscription(subscription.stripe_id);
}

export async function setSubscriptionInactiveViaStripeWebhook({
  stripeSubscriptionId,
  stripeCustomerId,
}: {
  stripeSubscriptionId: Stripe.Subscription['id'];
  stripeCustomerId: Stripe.Customer['id'];
}): Promise<void> {
  // const user = await getUserByStripeId(stripeCustomerId);
  // const subscription = await getSubscriptionByStripeId(stripeSubscriptionId, {
  //   user_id: user.id,
  // });
  // if (subscription) {
  //   await setSubscriptionActiveById(subscription.id, {
  //     active: false,
  //     user_id: user.id,
  //   });
  //   if (subscription.product_id === ProductPlans.AccountSync) {
  //     await decrementUserPropertyVal(user.id, {
  //       count: 1,
  //       field: 'available_account_syncs',
  //     });
  //     await decrementUserPropertyVal(user.id, {
  //       count: 1,
  //       field: 'active_account_syncs',
  //     });
  //   } else {
  //     await setUserPremiumMembershipStatus(user.id, { active: false });
  //   }
  // }
}
