export declare function signUpInCognito({ first_name, last_name, password, username, }: {
    first_name: string;
    last_name: string;
    password: string;
    username: string;
}): Promise<{
    exception_code?: unknown;
    cognito_id?: string;
    delivery_details?: {
        destination?: string;
        medium?: string;
    };
}>;
export declare function checkUsernameAvailability({ username, }: {
    username: string;
}): Promise<boolean>;
//# sourceMappingURL=signup.d.ts.map