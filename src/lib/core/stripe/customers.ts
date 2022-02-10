import { StripeMissingSecretKeyException } from '@srclaunch/exceptions';
import { User } from '@srclaunch/types';
import Stripe from 'stripe';

// import config from '../../config';
import {
  getUserById,
  // updateUserById
} from '../users';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function getStripeCustomerId({
  user_id,
}: // firstName,
// lastName,
{
  user_id: User['id'];
  // firstName?: User['first_name'];
  // lastName?: User['last_name'];
}) {
  // : Promise<Stripe.Customer['id']>
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

  const user = await getUserById(user_id);

  // if (!user.stripe_customer_id) {
  //   const newCustomer = await stripe.customers.create({
  //     email: user.email_address,
  //     name: `${firstName} ${lastName}`,
  //   });

  //   await updateUserById(user_id, {
  //     stripe_customer_id: newCustomer.id,
  //   });

  //   return newCustomer.id;
  // }

  // return user.stripe_customer_id;
}

export async function deleteCustomer(customerId: string): Promise<true> {
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

  await stripe.customers.del(customerId);

  return true;
}
