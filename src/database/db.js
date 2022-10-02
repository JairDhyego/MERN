const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Espere a conexão com o banco de dados.");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.ygdz7nv.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
