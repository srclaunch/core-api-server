// import {
//   CountryCode,
//   PaymentMethod,
//   User,
// } from '@budgetbloom/budgetbloom-types';

// import db from '../../../../models/core';
import {
  addCustomerPaymentMethod,
  getStripeCustomerId,
  removeStripePaymentMethod,
} from '../../stripe';
import { setStripeDefaultPaymentMethod } from '../../stripe/payment-methods';
import { getUserById } from '../../users';

// const { PaymentMethod: PaymentMethodDb } = db;

// export async function createPaymentMethod({
//   brand,
//   country,
//   exp_month,
//   exp_year,
//   last_four_digits,
//   stripe_id,
//   three_d_secure_usage_supported,
//   type,
//   user_id,
// }: {
//   brand: string;
//   country: CountryCode;
//   exp_month: number;
//   exp_year: number;
//   last_four_digits: number;
//   stripe_id: string;
//   three_d_secure_usage_supported: boolean;
//   type: string;
//   user_id: User['id'];
// }): Promise<PaymentMethod> {
//   const user = await getUserById(user_id);

//   const stripeCustomerId = await getStripeCustomerId({
//     firstName: user.first_name,
//     lastName: user.last_name,
//     user_id,
//   });

//   await addCustomerPaymentMethod({
//     customerId: stripeCustomerId,
//     paymentMethodId: stripe_id,
//   });

//   const paymentMethod = await PaymentMethodDb.create({
//     UserId: user_id,
//     brand,
//     country,
//     exp_month,
//     exp_year,
//     last_four_digits,
//     stripe_id,
//     three_d_secure_usage_supported,
//     type,
//   });

//   return paymentMethod;
// }

// export async function getPaymentMethodById(
//   id: PaymentMethod['id'],
//   { user_id }: { user_id: User['id'] },
// ): Promise<PaymentMethod> {
//   const paymentMethod = await PaymentMethodDb.findOne({
//     where: { UserId: user_id, id },
//   });

//   return paymentMethod;
// }

// export async function deletePaymentMethodById(
//   id: PaymentMethod['id'],
//   { user_id }: { user_id: User['id'] },
// ): Promise<void> {
//   const paymentMethod = await PaymentMethodDb.findOne({
//     where: { UserId: user_id, id },
//   });

//   await removeStripePaymentMethod({ paymentMethodId: paymentMethod.stripe_id });

//   await paymentMethod.destroy();
// }

// export async function listPaymentMethods(
//   user_id: User['id'],
// ): Promise<PaymentMethod[]> {
//   const paymentMethods = await PaymentMethodDb.findAll({
//     where: {
//       UserId: user_id,
//     },
//   });

//   return paymentMethods;
// }

// export async function deleteAllUserPaymentMethods(
//   user_id: User['id'],
// ): Promise<void> {
//   const paymentMethods = await PaymentMethodDb.findAll({
//     where: {
//       UserId: user_id,
//     },
//   });

//   for (const paymentMethod of paymentMethods) {
//     await removeStripePaymentMethod(paymentMethod.stripe_id);

//     await paymentMethod.destroy();
//   }
// }

// export async function setDefaultPaymentMethod(
//   id: PaymentMethod['id'],
//   {
//     stripeCustomerId,
//     user_id,
//   }: { stripeCustomerId: string; user_id: User['id'] },
// ): Promise<void> {
//   const paymentMethod = await getPaymentMethodById(id, { user_id });

//   await setStripeDefaultPaymentMethod({
//     stripeCustomerId,
//     stripePaymentMethodId: paymentMethod.stripe_id,
//   });
// }
