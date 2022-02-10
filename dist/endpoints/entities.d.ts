import { Request, Response } from 'express';
import { DataClient } from '@srclaunch/data-client';
import { CoreAPIServerOptions } from '../index';
declare const _default: ({ aws, dataClient, }: {
    aws: CoreAPIServerOptions['aws'];
    dataClient: DataClient;
}) => {
    create: (req: Request, res: Response) => Promise<Response<unknown>>;
    deleteMany: (req: Request, res: Response) => Promise<Response<unknown>>;
    deleteOne: (req: Request, res: Response) => Promise<Response<unknown>>;
    getOne: (req: Request, res: Response) => Promise<Response<unknown>>;
    getMany: (req: Request, res: Response) => Promise<Response<unknown>>;
    healthcheck: (req: Request, res: Response) => Promise<Response<unknown>>;
    updateMany: (req: Request, res: Response) => Promise<Response<unknown>>;
    updateOne: (req: Request, res: Response) => Promise<Response<unknown>>;
};
export default _default;
//# sourceMappingURL=entities.d.ts.map