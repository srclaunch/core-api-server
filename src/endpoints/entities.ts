import { Request, Response } from 'express';
import { DataClient } from '@srclaunch/data-client';
import { Condition } from '@srclaunch/types';
import queryString from 'query-string';
import {uploadToS3} from '../lib/aws/s3';
import { CoreAPIServerOptions } from '../index';

export default ({ aws, dataClient, }: { aws: CoreAPIServerOptions['aws']; dataClient: DataClient; }) => {
  return {
    create: async (req: Request, res: Response): Promise<Response<unknown>> => {
      const model = req.params.model;
      const params = req.body;
      // @ts-ignore
      const files = req.files;

      if (!model) {
        return res.status(400).json({ error: 'Missing model' });
      }

      if (files) {
        if (!aws.secretAccessKey || !aws.accessKeyId || !aws.cognito.identityPoolId || !aws.s3.bucket || !aws.s3.region) {
          throw new Error('Missing AWS credentials');
        }
 
        const result = await uploadToS3({
          accessKeyId: aws.accessKeyId,
          secretAccessKey: aws.secretAccessKey,
          files,
          bucket: aws.s3.bucket,
          identityPoolId: aws.cognito.identityPoolId,
          region: aws.s3.region
        });

        params.images = result;
      }
      
      const entity = await dataClient.create(model, params);

      if (!entity) {
        return res.status(500).json({ error: 'Failed to create entity' });
      }

      // @ts-ignore
      return res.status(200).json({ ...entity.dataValues });
    },
    deleteMany: async (req: Request, res: Response): Promise<Response<unknown>> => {
      const model = req.params.model;
      const ids = req.body;

      if (!model) {
        return res.status(400).send('Missing model');
      }

      const result = await dataClient.deleteMany(model, ids);

      return res.status(200).json(result);
    },
    deleteOne: async (req: Request, res: Response): Promise<Response<unknown>> => {
      const model = req.params.model;
      const id = req.params.id;
  
      if (!model) {
        return res.status(400).json({ error: 'Missing model' });
      }

      if (!id) {
        return res.status(400).json({ error: 'Missing id' });
      }

      const entity = await dataClient.deleteOne(model, id);

      return res.status(200).json(entity);
    },
    getOne: async (req: Request, res: Response): Promise<Response<unknown>> => {
      const model = req.params.model;
      const id = req.params.id;
  
      if (!model) {
        return res.status(400).json({ error: 'Missing model' });
      }

      if (!id) {
        return res.status(400).json({ error: 'Missing id' });
      }

      const entity = await dataClient.getOne(model, id);

      return res.status(200).json(entity);
    },
    getMany: async (
      req: Request,
      res: Response,
    ): Promise<Response<unknown>> => {
      const conditions = req.params.conditions as unknown as Condition[] ?? undefined;
      const { limit, model, offset, ...filters } = req.params;
      // const limit = Number.parseInt(req.params.limit ?? '50');
      // const offset = Number.parseInt(req.params.offset ?? '0');
      // const filters = req.params.filters ? queryString.parse(req.params.filters) : undefined;

      if (!model) {
        return res.status(400).send('Missing model');
      }

      const result = await dataClient.getMany(model, {
        conditions, 
        filters, 
        limit: limit ? Number.parseInt(limit) : 25, 
        offset: offset ? Number.parseInt(offset) : 0 
      });

      return res.status(200).json(result);
    },
    healthcheck: async (
      req: Request,
      res: Response,
    ): Promise<Response<unknown>> => {
      return res.status(200).send();
    },
    updateMany: async (req: Request, res: Response): Promise<Response<unknown>> => {
      const model = req.params.model;
      const modelObj = req.body;
  
      if (!model) {
        return res.status(400).json({ error: 'Missing model' });
      }

      const entity = await dataClient.updateMany(model, modelObj);

      if (!entity) {
        return res.status(500).json({ error: 'Failed to update entities' });
      }

      // @ts-ignore
      return res.status(200).json({ ...entity.dataValues });
    },
    updateOne: async (req: Request, res: Response): Promise<Response<unknown>> => {
      const { id, model } = req.params;
      const params = req.body;
      // @ts-ignore
      const files = req.files;


      if (!model) {
        return res.status(400).json({ error: 'Missing model' });
      }

      if (!id) {
        return res.status(400).json({ error: 'Missing id' });
      }

      if (files) {
        if (!aws.secretAccessKey || !aws.accessKeyId || !aws.cognito.identityPoolId || !aws.s3.bucket || !aws.s3.region) {
           throw new Error('Missing AWS credentials');
         }
 
         const result = await uploadToS3({
           accessKeyId: aws.accessKeyId,
           secretAccessKey: aws.secretAccessKey,
           files,
           bucket: aws.s3.bucket,
           identityPoolId: aws.cognito.identityPoolId,
           region: aws.s3.region
         });
 
         params.images = params.images && params.images[0] ? [ ...JSON.parse(params.images[0]), ...result] : [ ...result ];
      }

      console.log({
        model, id, params
      });
      
      const entity = await dataClient.updateOne(model, id, params);

      if (!entity) {
        return res.status(500).json({ error: 'Failed to update entity' });
      }

      // @ts-ignore
      return res.status(200).json(entity);
    },
  };
};
