import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File Url is required",
  },
  title: {
    type: String,
    required: "title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model("Video", videoSchema);
export default model;
