import { Account, PaymentMethod, Subscription, User } from '@srclaunch/types';
import Stripe from 'stripe';
export declare function createSubscription({ account_id, payment_method_id, user_id, free_trial, }: {
    account_id: Account['id'];
    payment_method_id: PaymentMethod['id'];
    user_id: User['id'];
    free_trial: boolean;
}): Promise<Subscription> | void;
export declare function deleteAllUserSubscriptions(id: User['id']): Promise<void>;
export declare function getSubscriptionsByUserId(id: User['id']): Promise<Subscription[]>;
export declare function getSubscriptionById(id: Subscription['id'], { user_id }: {
    user_id: User['id'];
}): Promise<Subscription>;
export declare function getSubscriptionByStripeId(id: Subscription['id'], { user_id }: {
    user_id: User['id'];
}): Promise<Subscription>;
export declare function setSubscriptionStatusById(id: Subscription['id'], { status, user_id, }: {
    status: 'incomplete' | 'incomplete_expired' | 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid';
    user_id: User['id'];
}): Promise<Subscription>;
export declare function setSubscriptionActiveById(id: Subscription['id'], { active, user_id }: {
    active: boolean;
    user_id: User['id'];
}): Promise<Subscription>;
export declare function cancelSubscription(id: Subscription['id'], { user_id }: {
    user_id: User['id'];
}): Promise<void>;
export declare function setSubscriptionInactiveViaStripeWebhook({ stripeSubscriptionId, stripeCustomerId, }: {
    stripeSubscriptionId: Stripe.Subscription['id'];
    stripeCustomerId: Stripe.Customer['id'];
}): Promise<void>;
//# sourceMappingURL=index.d.ts.map