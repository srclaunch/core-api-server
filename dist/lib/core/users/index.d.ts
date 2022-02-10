import { User, Person } from '@srclaunch/types';
export declare function createUser({ cognitoId, personId, }: {
    cognitoId: string;
    personId?: Person['id'];
}): Promise<void>;
export declare function getUserById(id: User['id']): Promise<void>;
//# sourceMappingURL=index.d.ts.map