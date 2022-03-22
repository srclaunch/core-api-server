import { Image } from '@srclaunch/types';
export declare function uploadToS3({ accessKeyId, bucket, files, identityPoolId, region, secretAccessKey, }: {
    accessKeyId: string;
    bucket: string;
    files: any;
    identityPoolId: string;
    region: string;
    secretAccessKey: string;
}): Promise<Image[]>;
//# sourceMappingURL=s3.d.ts.map