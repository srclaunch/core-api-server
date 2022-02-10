import {
  Exception,
  DatabaseException,
  NullUserException,
  CaughtException,
} from '@srclaunch/exceptions';
import {
  // Person,
  UserVerificationDetails,
  User,
  Person,
} from '@srclaunch/types';
// import { db } from '../../../utils/db';
import { Model, ModelType } from 'sequelize';

export async function createUser({
  cognitoId,
  personId,
}: {
  cognitoId: string;
  personId?: Person['id'];
}) {
  //: Promise<User>
  try {
    // const { sequelize } = db;
    // if (!db || !sequelize) {
    //   throw new DatabaseException('Database not initialized', {});
    // }
    // const getPersonID = async () => {
    //   if (personId) return personId;
    //   const person = (await db.sequelize?.models.Person.create({})) as Person;
    //   return person ? person.id : null;
    // };
    // const pId = await getPersonID();
    // const user = await db.sequelize?.models.User.create({
    //   cognito_id: cognitoId,
    //   PersonId: pId,
    // });
    // if (!user) {
    //   throw new NullUserException('User creation failed', {});
    // }
    // return user as unknown as User;
  } catch (err: any) {
    console.log('error', err);
    throw new Exception('Failure creating user', {
      cause: err,
    });
  }
}

export async function getUserById(id: User['id']) {
  //: Promise<Model<User, Partial<User>>>
  try {
    // const { sequelize } = db;
    // const dbUser = await sequelize?.models.User.findOne({
    //   where: { id },
    // });
    // if (!dbUser) {
    //   throw new NullUserException('User not found', {});
    // }
    // return dbUser;
  } catch (err: any) {
    console.log('err', err);
    throw new CaughtException('Exception caught in getUserById()', {});
  }
}

// export async function destroyUser(id: User['id']): Promise<true> {
//   const { sequelize } = db;

//   if (!sequelize) {
//     throw new NullSequelizeInstanceException(
//       '"sequelize" is not instantiated.',
//       {},
//     );
//   }

//   const dbUser = await sequelize.models.User.findOne({
//     where: { id },
//   });

//   if (dbUser) await dbUser.destroy();

//   return true;
// }

// export async function getUserByEmail(
//   email_address: string,
// ): Promise<Model<User>> {
//   const { sequelize } = db;

//   if (!sequelize) {
//     throw new NullSequelizeInstanceException(
//       '"sequelize" is not instantiated.',
//       {},
//     );
//   }

//   const dbUser = await sequelize.models.User.findOne({
//     where: { email_address },
//   });

//   if (!dbUser) {
//     throw new NullUserException('User not found by email address.', {});
//   }

//   return dbUser;
// }

// export async function getUserByCognitoId(
//   cognitoId: string,
// ): Promise<Model<User>> {
//   const { sequelize } = db;

//   const dbUser = await sequelize?.models.User.findOne({
//     where: { cognito_id: cognitoId },
//   });

//   if (!dbUser) {
//     throw new NullUserException('User not found by Cognito ID.', {});
//   }

//   return dbUser;
// }

// export async function getUserByStripeId(
//   id: User['stripe_customer_id'],
// ): Promise<Model<User>> {
//   const { sequelize } = db;

//   const dbUser = await sequelize?.models.User.findOne({
//     where: { stripe_customer_id: id },
//   });

//   if (!dbUser) {
//     throw new NullUserException('User not found by Stripe ID.', {});
//   }

//   return dbUser;
// }

// export async function setUserConfirmed(id: User['id']): Promise<Model<User>> {
//   const { sequelize } = db;

//   const dbUser = await sequelize?.models.User.findOne({
//     where: { id },
//   });

//   if (!dbUser) {
//     throw new NullUserException('User not found by User ID.', {});
//   }

//   await dbUser.update({
//     confirmed: true,
//   });

//   return dbUser;
// }

// export async function updateUserById(
//   id: User['id'],
//   properties: User,
// ): Promise<Model<User>> {
//   const { sequelize } = db;

//   const dbUser = await sequelize?.models.User.findOne({
//     where: { id },
//   });

//   if (!dbUser) {
//     throw new NullUserException('User not found by User ID.', {});
//   }

//   await dbUser.update(properties);

//   return dbUser;
// }

// export async function incrementUserPropertyVal(
//   id: User['id'],
//   { field, count }: { field: string; count: number },
// ): Promise<void> {
//   const { User: UserDb } = db;

//   await UserDb.increment([field, count], { where: { id } });
// }

// export async function decrementUserPropertyVal(
//   id: User['id'],
//   { field, count }: { field: string; count: number },
// ): Promise<void> {
//   const { User: UserDb } = db;

//   await UserDb.decrement([field, count], { where: { id } });
// }

// export async function setUserPremiumMembershipStatus(
//   id: User['id'],
//   { active }: { active: boolean },
// ): Promise<void> {
//   const { User: UserDb } = db;

//   await UserDb.update({
//     premium_membership_active: active,
//   });
// }

// export async function signUp({
//   cognitoId,
//   // confirmationCodeDeliveryDetails,
//   firstName,
//   lastName,
//   email,
// }: {
//   cognitoId: string;
//   // confirmationCodeDeliveryDetails: {
//   //   destination: string;
//   //   medium: string;
//   // };
//   firstName: string;
//   lastName: string;
//   email: string;
// }): Promise<User['id']> {
//   const { sequelize } = db;

//   const dbUser = await sequelize?.models.User.create<
//     Model<UserAttributes, UserCreationAttributes>
//   >({
//     // code_delivery_destination: confirmationCodeDeliveryDetails?.destination,
//     // code_delivery_medium: confirmationCodeDeliveryDetails?.medium,
//     cognito_id: cognitoId,
//     first_name: firstName,
//     last_name: lastName,
//     username: email,
//   });

//   if (!dbUser) {
//     throw new NullUserException('User failed to create.', {});
//   }

//   // @ts-ignore
//   return dbUser.id;
// }

// export async function deleteUserAccount(id: User['id']): Promise<void> {
//   const dbUser = await getUserById(id);

//   if (!dbUser) {
//     throw new NullUserException('User failed to create.', {});
//   }

//   // @ts-ignore
//   if (dbUser.stripe_customer_id) {
//     // @ts-ignore
//     await deleteCustomer(dbUser.get('stripe_customer_id'));
//   }

//   await Promise.all([
//     await deleteAllUserPaymentMethods(id),
//     await deleteAllUserSubscriptions(id),
//     await destroyUser(id),
//   ]);
// }
