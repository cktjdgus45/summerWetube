import routes from "./routers/routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WETUBE";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  console.log(req.user);
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
