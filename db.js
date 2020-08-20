import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("connect success");
const handleError = () => console.error.bind(console, "connection error");

db.once("open", handleOpen);
db.on("error", handleError);
