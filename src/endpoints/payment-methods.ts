import { PaymentMethod } from '@srclaunch/types';
import { Request, Response } from 'express';

// import {
//   createPaymentMethod,
//   deleteAllUserPaymentMethods,
//   deletePaymentMethodById,
//   getPaymentMethodById,
//   listPaymentMethods,
// } from '../../../lib/core/entities/payment-methods';

export const PaymentMethodEndpoints = {
  create: async (req: Request, res: Response) => {
    //Promise<Response<PaymentMethod>>
    const {
      stripe_id,
      brand,
      country,
      last_four_digits,
      exp_month,
      exp_year,
      type,
      three_d_secure_usage_supported,
    } = req.body;
    // @ts-ignore
    const user_id = req.user?.id;

    // const paymentMethod = await createPaymentMethod({
    //   brand,
    //   country,
    //   exp_month,
    //   exp_year,
    //   last_four_digits,
    //   stripe_id,
    //   three_d_secure_usage_supported,
    //   type,
    //   user_id,
    // });

    // return res.status(200).json(paymentMethod);
  },
  delete: async (
    req: Request,
    res: Response,
  ): Promise<Response<Record<string, never>>> => {
    // @ts-ignore
    // const user_id = req.user?.id;
    // const id: PaymentMethod['id'] = req.params.paymentMethodId;

    // await deletePaymentMethodById(id, { user_id });

    return res.status(200).json({});
  },
  deleteAll: async (req: Request, res: Response): Promise<Response<void>> => {
    // @ts-ignore
    const user_id = req.user?.id;
    const { confirmText } = req.body;

    if (confirmText === 'CONFIRM') {
      // await deleteAllUserPaymentMethods(user_id);
    }

    return res.status(200).send();
  },
  getOne: async (req: Request, res: Response) => {
    // Promise<Response<Record<string, never>>>
    // @ts-ignore
    // const user_id = req.user?.id;
    // const id: PaymentMethod['id'] = req.params.paymentMethodId;
    // const paymentMethod = await getPaymentMethodById(id, { user_id });
    // return res.status(200).json(paymentMethod);
  },
  list: async (req: Request, res: Response) => {
    // Promise<Response<PaymentMethod[]>>
    // @ts-ignore
    // const user_id = req.user?.id;
    // const paymentMethods = await listPaymentMethods(user_id);
    // return res.status(200).json(paymentMethods);
  },
};
