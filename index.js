const express = require("express");
const app = express();

const userRoute = require("./src/routes/user.route");
const connectDatabase = require("./src/database/db");

const port = 3000;

connectDatabase();
app.use(express.json());
app.use("/users", userRoute);

app.listen(port, () => console.log("Tô rodando hein"));
