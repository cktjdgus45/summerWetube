import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL_PROD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("connect success");
const handleError = () => console.error.bind(console, "connection error");

db.once("open", handleOpen);
db.on("error", handleError);
