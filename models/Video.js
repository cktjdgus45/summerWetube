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
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const model = mongoose.model("Video", videoSchema);
export default model;
