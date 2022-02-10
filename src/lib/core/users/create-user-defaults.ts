// import {
//   Budget,
//   BudgetCategory,
//   SpendingCategory,
//   User,
// } from '@budgetbloom/budgetbloom-types';

// import { MAPPED_OUT_OF_BOX_CATEGORIES } from '../../../data/spending-categories';
// import db from '../../../models/core';

// interface ImportKeymapType {
//   id: string;
//   system_key: string;
// }

// export async function createDefaultCategories({
//   budgetId,
//   user_id,
// }: {
//   budgetId: Budget['id'];
//   user_id: User['id'];
// }): Promise<void> {
//   const {
//     BudgetCategory: BudgetCategoryDb,
//     SpendingCategory: SpendingCategoryDb,
//   } = db;

//   const now = new Date();
//   const month = now.getMonth();
//   const year = now.getFullYear();

//   const topLevelSpendingCategories: SpendingCategory[] =
//     MAPPED_OUT_OF_BOX_CATEGORIES.LEVEL_1.map(category => {
//       return {
//         ...category,
//         BudgetId: budgetId,
//         UserId: user_id,
//         hierarchy_level: 1,
//         system_generated: true,
//       };
//     }) as unknown as SpendingCategory[];

//   const createTopLevelCategoriesResult = await SpendingCategoryDb.bulkCreate(
//     topLevelSpendingCategories,
//   );

//   const topLevelKeyMap: ImportKeymapType[] = createTopLevelCategoriesResult.map(
//     (category: ImportKeymapType) => {
//       return {
//         id: category.id,
//         system_key: category.system_key,
//       };
//     },
//   );

//   const topLevelBudgetCategories: BudgetCategory[] =
//     MAPPED_OUT_OF_BOX_CATEGORIES.LEVEL_1.map(category => {
//       return {
//         ...category,
//         BudgetId: budgetId,
//         SpendingCategoryId:
//           topLevelKeyMap.find(k => {
//             return k.system_key === category.system_key;
//           })?.id ?? null,
//         UserId: user_id,
//         hierarchy_level: 1,
//         month,
//         year,
//       };
//     }) as unknown as BudgetCategory[];

//   await BudgetCategoryDb.bulkCreate(topLevelBudgetCategories);

//   const secondLevelSpendingCategories =
//     MAPPED_OUT_OF_BOX_CATEGORIES.LEVEL_2.map(c => {
//       return {
//         ...c,
//         BudgetId: budgetId,
//         ParentSpendingCategoryId:
//           topLevelKeyMap.find(k => {
//             return k.system_key === c.parent_system_key;
//           })?.id ?? null,
//         UserId: user_id,
//         hierarchy_level: 2,
//         system_generated: true,
//       };
//     });

//   const createSecondLevelCategoriesResult: ImportKeymapType[] =
//     await SpendingCategoryDb.bulkCreate(secondLevelSpendingCategories);

//   const secondLevelKeyMap: ImportKeymapType[] =
//     createSecondLevelCategoriesResult.map(category => {
//       return {
//         id: category.id,
//         system_key: category.system_key,
//       };
//     });

//   const thirdLevelSpendingCategories = MAPPED_OUT_OF_BOX_CATEGORIES.LEVEL_3.map(
//     c => {
//       return {
//         ...c,
//         BudgetId: budgetId,
//         ParentSpendingCategoryId:
//           secondLevelKeyMap.find(k => {
//             return k.system_key === c.parent_system_key;
//           })?.id ?? null,
//         UserId: user_id,
//         hierarchy_level: 3,
//         system_generated: true,
//       };
//     },
//   );

//   await SpendingCategoryDb.bulkCreate(thirdLevelSpendingCategories);
// }
