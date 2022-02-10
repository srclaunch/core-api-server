import Stripe from 'stripe';
export declare function addCustomerPaymentMethod({ customerId, paymentMethodId, }: {
    customerId: string;
    paymentMethodId: string;
}): Promise<Stripe.PaymentMethod>;
export declare function setStripeDefaultPaymentMethod({ stripeCustomerId, stripePaymentMethodId, }: {
    stripeCustomerId: string;
    stripePaymentMethodId: string;
}): Promise<void>;
export declare function removeStripePaymentMethod({ paymentMethodId, }: {
    paymentMethodId: string;
}): Promise<true>;
//# sourceMappingURL=payment-methods.d.ts.map