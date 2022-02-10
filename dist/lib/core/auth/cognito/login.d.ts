import { AuthenticationChallengeDetails, AuthenticationDeviceDetails, AuthenticationTokens } from '@srclaunch/types';
export declare function login({ username, password, fingerprint, }: {
    username: string;
    password: string;
    fingerprint: {
        deviceKey?: string;
        encodedData: string;
        httpHeaders: {
            headerName: string;
            headerValue: string;
        }[];
        ipAddress: string;
        serverName: string;
        serverPath: string;
    };
}): Promise<{
    challenge: AuthenticationChallengeDetails;
} | {
    newDevice?: AuthenticationDeviceDetails | null;
    tokens: AuthenticationTokens;
}>;
export declare function authenticateToken({ fingerprint, refreshToken, }: {
    fingerprint: {
        deviceKey: string;
        encodedData: string;
        httpHeaders: {
            headerName: string;
            headerValue: string;
        }[];
        ipAddress: string;
        serverName: string;
        serverPath: string;
    };
    refreshToken: string;
}): Promise<{
    newDevice?: AuthenticationDeviceDetails | null;
    tokens: AuthenticationTokens;
}>;
//# sourceMappingURL=login.d.ts.map