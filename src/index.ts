import express from "express";
import { db } from "./config/database.config";
import { router } from "./routes/todo.routes";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/todos',router)

db.sync()
  .then(() => {
    console.log(`connection sucessfull!!!`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, async() => {
   
  console.log(`Server started at port ${PORT}`);
});
