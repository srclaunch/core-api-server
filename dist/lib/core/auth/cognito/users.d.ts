import { CognitoUser, User } from '@srclaunch/types';
export declare function deleteUser(email: string): Promise<true>;
export declare function getUserDevice(): Promise<void>;
export declare function confirmUserDevice(): Promise<void>;
export declare function getCognitoUserByUserId(id: User['id']): Promise<CognitoUser | null>;
export declare function getCognitoUserByEmailAddress(emailAddress: string): Promise<CognitoUser | null>;
//# sourceMappingURL=users.d.ts.map