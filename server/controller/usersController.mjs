import {sequelize} from "../db/db.mjs";
import User from "../models/user.js";

const users = await User.findAll();
console.log(users)
// export async function getUserNames() {
//     try {
//       const sql = 'SELECT id, name, email FROM `users`';
//       const result = await queryBuilder.query({
//         sql: sql,
//       })
//       return result;
//     } catch (err) {
//       console.error(err);
//     }
// }

// export async function getUserCount() {
//     try {
//       const sql = 'SELECT COUNT(id) FROM `users`';
//       const result = await queryBuilder.query({
//         sql: sql,
//         rowsAsArray: true,
//       });

//       return result[0][0];
//     } catch (err) {
//       console.error(err);
//     }
// }