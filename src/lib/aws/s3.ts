import { Image } from '@srclaunch/types';
import AWS from 'aws-sdk';

export async function uploadToS3({
  accessKeyId, 
  bucket,
  files, 
  identityPoolId, 
  region,
  secretAccessKey,
}: { 
  accessKeyId: string;
  bucket: string;
  files: any;
  identityPoolId: string;
  region: string; 
  secretAccessKey: string; 
}): Promise<Image[]> {
  AWS.config.update({
    accessKeyId,
    secretAccessKey,
    region,
  });
  
  const s3 = new AWS.S3({
    params: { Bucket: bucket }
  });

  let responses:  Image[] = [];
  for (const file of files) {
    const { buffer, mimetype, originalname } = file;

    const s3Response = await s3.upload({
      Body: buffer,
      Bucket: bucket,
      ContentType: mimetype,
      Key: `uploads/images/${new Date().getSeconds()}.${originalname}`,
      ACL: 'public-read',
    }).promise();

    responses = [...responses, { url: s3Response.Location }];
  }

  return responses;
}