import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Espere a conexão com o banco de dados.");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((err) => console.log(err));
};

export default connectDatabase;
