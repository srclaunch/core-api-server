import { DataClientOptions } from '@srclaunch/data-client';
import { Logger } from '@srclaunch/logger';
import { Environment } from '@srclaunch/types';
export declare type CoreAPIServerOptions = {
    readonly aws: {
        readonly accessKeyId?: string;
        readonly cognito: {
            readonly identityPoolId?: string;
        };
        readonly s3: {
            readonly bucket?: string;
            readonly region?: string;
        };
        readonly region?: string;
        readonly secretAccessKey?: string;
    };
    readonly db: DataClientOptions;
    readonly environment: Environment;
    readonly logger?: Logger;
    readonly security?: {
        readonly trustedOrigins?: {
            readonly [environment: Environment['id']]: string[];
        };
    };
};
export declare class CoreAPIServer {
    private config?;
    private db?;
    private environment;
    private readonly models?;
    private logger;
    private server;
    constructor(config: CoreAPIServerOptions);
    start(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map