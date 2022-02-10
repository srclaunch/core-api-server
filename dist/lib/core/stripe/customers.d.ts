import { User } from '@srclaunch/types';
export declare function getStripeCustomerId({ user_id, }: {
    user_id: User['id'];
}): Promise<void>;
export declare function deleteCustomer(customerId: string): Promise<true>;
//# sourceMappingURL=customers.d.ts.map