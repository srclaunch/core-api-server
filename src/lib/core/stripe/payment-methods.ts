import { StripeMissingSecretKeyException } from '@srclaunch/exceptions';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function addCustomerPaymentMethod({
  customerId,
  paymentMethodId,
}: {
  customerId: string;
  paymentMethodId: string;
}): Promise<Stripe.PaymentMethod> {
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

  const newPaymentMethod = await stripe.paymentMethods.attach(paymentMethodId, {
    customer: customerId,
  });

  return newPaymentMethod;
}

export async function setStripeDefaultPaymentMethod({
  stripeCustomerId,
  stripePaymentMethodId,
}: {
  stripeCustomerId: string;
  stripePaymentMethodId: string;
}): Promise<void> {
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

  await stripe.customers.update(stripeCustomerId, {
    invoice_settings: {
      default_payment_method: stripePaymentMethodId,
    },
  });
}

export async function removeStripePaymentMethod({
  paymentMethodId,
}: {
  paymentMethodId: string;
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

  await stripe.paymentMethods.detach(paymentMethodId);

  return true;
}
