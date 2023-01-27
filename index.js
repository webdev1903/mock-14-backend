const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");

const app = express();

const wordController = require("./controllers/word.controller");
const userController = require("./controllers/user.controller");

app.use(cors());
app.use(express.json());

app.use("", wordController);
app.use("/playzone", userController);

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log(`listening on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
