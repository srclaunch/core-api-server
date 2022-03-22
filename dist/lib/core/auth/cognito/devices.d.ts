export declare function confirmDevice({ accessToken, deviceKey, deviceName, passwordVerifier, salt, }: {
    accessToken: string;
    deviceKey: string;
    deviceName?: string;
    passwordVerifier: string;
    salt: string;
}): Promise<{
    success: boolean;
}>;
//# sourceMappingURL=devices.d.ts.map