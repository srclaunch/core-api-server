import Stripe from 'stripe';
export declare function createStripeSubscription({ freeTrial, stripeCustomerId, subscriptionPlanItem, trialEndDate, }: {
    freeTrial: boolean;
    stripeCustomerId: string;
    subscriptionPlanItem: {
        price: string;
    };
    trialEndDate: number;
}): Promise<Stripe.Subscription>;
export declare function removeSubscription({ subscriptionId, }: {
    subscriptionId: string;
}): Promise<true>;
//# sourceMappingURL=subscriptions.d.ts.map