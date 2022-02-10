import { StripeMissingSecretKeyException } from '@srclaunch/exceptions';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function createStripeSubscription({
  freeTrial,
  stripeCustomerId,
  subscriptionPlanItem,
  trialEndDate,
}: {
  freeTrial: boolean;
  stripeCustomerId: string;
  subscriptionPlanItem: { price: string };
  trialEndDate: number;
}): Promise<Stripe.Subscription> {
  if (!stripeSecretKey)
    throw new StripeMissingSecretKeyException(
      'Missing "STRIPE_SECRET_KEY" environment variable',
      {
        origin: {
          file: 'lib/core/stripe/customers.ts',
          function: 'getStripeCustomerId()',
        },
      },
    );

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2020-08-27',
  });

  const stripeSubscription = await stripe.subscriptions.create({
    customer: stripeCustomerId,
    expand: ['latest_invoice.payment_intent'],
    items: [subscriptionPlanItem],
    trial_end: freeTrial ? trialEndDate : undefined,
  });

  return stripeSubscription;
}

export async function removeSubscription({
  subscriptionId,
}: {
  subscriptionId: string;
}): Promise<true> {
  if (!stripeSecretKey)
    throw new StripeMissingSecretKeyException(
      'Missing "STRIPE_SECRET_KEY" environment variable',
      {
        origin: {
          file: 'lib/core/stripe/customers.ts',
          function: 'getStripeCustomerId()',
        },
      },
    );

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2020-08-27',
  });

  await stripe.subscriptions.del(subscriptionId);

  return true;
}
