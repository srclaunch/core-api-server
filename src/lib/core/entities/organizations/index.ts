// import Sequelize from 'sequelize';
// import { Company } from '../models';

// import { logException, LogLevels } from '../utils/logging';

// async function getCompanyIdByNameSearch({ name }) {
//   try {
//     const company = await Company.findOne({
//       where: {
//         search_keywords: {
//           [Sequelize.Op.substring]: name.toLowerCase(),
//         },
//       },
//     });

//     if (company) {
//       return company.id;
//     } else {
//       return null;
//     }
//   } catch (err) {
//     logException({
//       data: {
//         name,
//       },
//       error: err,
//       message:
//         'CaughtException - lib/transactions.ts - getCompanyIdByNameSearch()',
//       level: LogLevels.ERROR,
//     });

//     return null;
//   }
// }
