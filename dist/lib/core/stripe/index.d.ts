/// <reference types="node" />
export * from './customers';
export * from './payment-methods';
export * from './subscriptions';
declare type StripeEvent = {
    type: string;
    data: {
        object: {
            id: string;
            customer: string;
            status: string;
        };
    };
};
export declare function constructEventWithSignature({ requestBody, signature, }: {
    requestBody: string | Buffer;
    signature: string | string[] | Buffer | undefined;
}): StripeEvent;
//# sourceMappingURL=index.d.ts.map