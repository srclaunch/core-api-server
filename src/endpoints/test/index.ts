import { DatabaseException, ExceptionRemediator } from '@srclaunch/exceptions';
// import Logger from '@srclaunch/logger';

import { Request, Response } from 'express';

const remediator = new ExceptionRemediator();
// import { db } from '../../lib/utils/db';
// const logger = new Logger();

export default {
  testDatabaseCreate: async (
    req: Request,
    res: Response,
  ): Promise<Response<void> | void> => {
    try {
      const db = {
        sequelize: false
      }
      if (!db || !db.sequelize) {
        throw new DatabaseException('Database not initialized', {});
      }

      // @ts-ignore
      const testCreate = await db.sequelize.models.Test.create({
        name: 'test',
        description: 'TESTT',
      });

      console.log('testCreate', testCreate);

      return res.status(200).send({
        success: true,
      });
    } catch (err) {
      console.log('err', err);
      // @
      // return remediator.handleException(err as Error, { res });
    }
  },
};
