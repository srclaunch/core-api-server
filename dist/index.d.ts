import { DataClient, DataClientOptions } from '@srclaunch/data-client';
export declare type CoreAPIServerOptions = {
    aws: {
        accessKeyId?: string;
        cognito: {
            identityPoolId?: string;
        };
        s3: {
            bucket?: string;
            region?: string;
        };
        region?: string;
        secretAccessKey?: string;
    };
    db: DataClientOptions & {
        alter?: boolean;
        force?: boolean;
    };
};
export declare class CoreAPIServer {
    config?: CoreAPIServerOptions;
    db?: DataClient;
    models?: CoreAPIServerOptions['db']['models'];
    constructor(config: CoreAPIServerOptions);
    start(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map