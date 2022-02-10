import { StripeMissingSecretKeyException } from '@srclaunch/exceptions';
import Stripe from 'stripe';

export * from './customers';
export * from './payment-methods';
export * from './subscriptions';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

type StripeEvent = {
  type: string;
  data: {
    object: {
      id: string;
      customer: string;
      status: string;
    };
  };
};

export function constructEventWithSignature({
  requestBody,
  signature = '',
}: {
  requestBody: string | Buffer;
  signature: string | string[] | Buffer | undefined;
}): StripeEvent {
  // TODO: Store this secret somewhere, figure out how to handle this
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

  return stripe.webhooks.constructEvent(
    requestBody,
    signature,
    'XYZ123',
  ) as unknown as StripeEvent;
}
