import { Request, Response } from 'express';
export declare const SubscriptionEndpoints: {
    cancel: (req: Request, res: Response) => Promise<Response<void>>;
    create: (req: Request, res: Response) => Promise<void>;
    deleteAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getOne: (req: Request, res: Response) => Promise<void>;
    list: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=subscriptions.d.ts.map