import { Request, Response } from 'express';
export declare const PaymentMethodEndpoints: {
    create: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<Response<Record<string, never>>>;
    deleteAll: (req: Request, res: Response) => Promise<Response<void>>;
    getOne: (req: Request, res: Response) => Promise<void>;
    list: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=payment-methods.d.ts.map