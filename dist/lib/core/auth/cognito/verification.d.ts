import { CognitoUser, CommunicationMedium } from '@srclaunch/types';
export declare function getCognitoVerificationDetails(userId: string): Promise<{
    status: CognitoUser['status'];
    delivery?: {
        medium: CommunicationMedium;
        destination?: string;
    };
}>;
export declare function verifyCode({ emailAddress, code, }: {
    emailAddress: string;
    code: string;
}): Promise<void>;
export declare function sendVerificationCode({ emailAddress, }: {
    emailAddress: string;
}): Promise<void>;
//# sourceMappingURL=verification.d.ts.map