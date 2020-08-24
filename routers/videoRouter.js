import express from "express";
import routes from "../routers/routes";
import {
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
  getUpload,
  postUpload,
  postEditVideo,
  getEditVideo,
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
