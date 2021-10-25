import express from "express";
import { db } from "./config/database.config";
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())

db.sync()
  .then(() => {
    console.log(`connect to database`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
