import { Exception } from '@srclaunch/exceptions';
import Logger from '@srclaunch/logger';
import { HttpServer } from '@srclaunch/http-server';
import { HttpRequestMethod } from '@srclaunch/types';

import entityEndpoints from './endpoints/entities';
import { DataClient, DataClientOptions } from '@srclaunch/data-client';

const logger = new Logger();

export type CoreAPIServerOptions =  {
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

export class CoreAPIServer {
  config?: CoreAPIServerOptions;
  db?: DataClient;
  models?: CoreAPIServerOptions['db']['models'];

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
          handler: entityEndpoints({ aws: this.config.aws, dataClient: this.db }).create,
          method: HttpRequestMethod.Post,
          route: '/:model',
        },
        {
          handler: entityEndpoints({ aws: this.config.aws, dataClient: this.db }).deleteMany,
          method: HttpRequestMethod.Delete,
          route: '/:model',
        },
        {
          handler: entityEndpoints({ aws: this.config.aws, dataClient: this.db }).deleteOne,
          method: HttpRequestMethod.Delete,
          route: '/:model/:id',
        },
        {
          handler: entityEndpoints({ aws: this.config.aws, dataClient: this.db }).getMany,
          method: HttpRequestMethod.Get,
          route: '/:model',
        },
        {
          handler: entityEndpoints({ aws: this.config.aws, dataClient: this.db }).getOne,
          method: HttpRequestMethod.Get,
          route: '/:model/:id',
        },
        {
          handler: entityEndpoints({ aws: this.config.aws, dataClient: this.db }).updateMany,
          method: HttpRequestMethod.Put,
          route: '/:model',
        },
        {
          handler: entityEndpoints({ aws: this.config.aws, dataClient: this.db }).updateOne,
          method: HttpRequestMethod.Put,
          route: '/:model/:id',
        },
      ],
      name: 'core-api',
    });

    server.listen();

    await this.db.connect({ alter: this.config.db.alter ?? false, force:  this.config.db.force ?? false });

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
