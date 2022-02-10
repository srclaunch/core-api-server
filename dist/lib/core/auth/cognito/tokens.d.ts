import { AuthenticationTokens } from '@srclaunch/types';
export declare function refreshToken({ deviceKey, refreshToken, }: {
    deviceKey: string;
    refreshToken: string;
}): Promise<{
    tokens: AuthenticationTokens;
}>;
//# sourceMappingURL=tokens.d.ts.map