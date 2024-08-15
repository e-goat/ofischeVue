import express from "express";
import {establishDatabaseConnection} from "./db/db.mjs";
import routes from "./routes/routes.mjs";

export const app = express();
const PORT = 3000;


app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  establishDatabaseConnection();
  routes();
})
