import { DataClient, DataClientOptions } from '@srclaunch/data-client';
import { Exception } from '@srclaunch/exceptions';
import { HttpServer } from '@srclaunch/http-server';
import Logger from '@srclaunch/logger';
import { Environment, HttpRequestMethod } from '@srclaunch/types';

import entityEndpoints from './endpoints/entities';

const logger = new Logger();

export type CoreAPIServerOptions = {
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
  readonly db: DataClientOptions & {
    readonly alter?: boolean;
    readonly force?: boolean;
  };
  readonly security?: {
    readonly trustedOrigins?: {
      readonly [environment: Environment['id']]: string[];
    };
  };
};

export class CoreAPIServer {
  private config?: CoreAPIServerOptions;
  private db?: DataClient;
  private readonly models?: CoreAPIServerOptions['db']['models'];

  constructor(config: CoreAPIServerOptions) {
    this.config = config;
  }

  public async start() {
    logger.info('Starting Core API Server');

    if (!this.config?.db.connection) {
      throw new Exception('Core API Server config is missing connection');
    }

    this.db = new DataClient({
      connection: this.config.db.connection,
      models: this.config.db.models,
    });

    const server = new HttpServer({
      endpoints: [
        {
          handler: entityEndpoints({
            aws: this.config.aws,
            dataClient: this.db,
          }).create,
          method: HttpRequestMethod.Post,
          route: '/:model',
        },
        {
          handler: entityEndpoints({
            aws: this.config.aws,
            dataClient: this.db,
          }).deleteMany,
          method: HttpRequestMethod.Delete,
          route: '/:model',
        },
        {
          handler: entityEndpoints({
            aws: this.config.aws,
            dataClient: this.db,
          }).deleteOne,
          method: HttpRequestMethod.Delete,
          route: '/:model/:id',
        },
        {
          handler: entityEndpoints({
            aws: this.config.aws,
            dataClient: this.db,
          }).getMany,
          method: HttpRequestMethod.Get,
          route: '/:model',
        },
        {
          handler: entityEndpoints({
            aws: this.config.aws,
            dataClient: this.db,
          }).getOne,
          method: HttpRequestMethod.Get,
          route: '/:model/:id',
        },
        {
          handler: entityEndpoints({
            aws: this.config.aws,
            dataClient: this.db,
          }).updateMany,
          method: HttpRequestMethod.Put,
          route: '/:model',
        },
        {
          handler: entityEndpoints({
            aws: this.config.aws,
            dataClient: this.db,
          }).updateOne,
          method: HttpRequestMethod.Put,
          route: '/:model/:id',
        },
      ],
      name: 'core-api',
      options: {
        trustedOrigins: this.config.security?.trustedOrigins,
      },
    });

    await this.db.connect({
      alter: this.config.db.alter ?? false,
      force: this.config.db.force ?? false,
    });

    await server.listen();

    logger.info('Core API Server started');
  }
}

/*
       {
          handler: LoginEndpoints.login,
          method: HttpRequestMethod.Post,
          route: '/auth/login',
        },
        {
          handler: LoginEndpoints.authenticateToken,
          method: HttpRequestMethod.Post,
          route: '/auth/token',
        },
        {
          handler: DeviceEndpoints.confirmDevice,
          method: HttpRequestMethod.Post,
          route: '/auth/device/confirm',
        },
        {
          handler: SignUpEndpoints.signUp,
          method: HttpRequestMethod.Post,
          route: '/auth/signup',
        },
        {
          handler: SignUpEndpoints.checkUsernameAvailability,
          method: HttpRequestMethod.Post,
          route: '/auth/username_availability',
        },
        {
          handler: VerificationEndpoints.getVerificationDetails,
          method: HttpRequestMethod.Get,
          route: '/auth/verification/:user_id',
        },
        {
          handler: VerificationEndpoints.sendVerificationCode,
          method: HttpRequestMethod.Post,
          route: '/auth/verification/send',
        },
        {
          handler: VerificationEndpoints.verifyCode,
          method: HttpRequestMethod.Post,
          route: '/auth/verification/verify',
        },
        {
          handler: EntityEndpoints.Create,
          method: HttpRequestMethod.Post,
          route: '/entity/:entity_name',
        },
        {
          handler: EntityEndpoints.Update,
          method: HttpRequestMethod.Put,
          route: '/entity/:entity_name/:entity_id',
        },
        {
          handler: GithubOauth,
          method: HttpRequestMethod.Get,
          route: '/github/oauth/callback',
        },*/
