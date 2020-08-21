import routes from "../routers/routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "HOME", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "HOME", videos });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", {
    pageTitle: "SEARCH",
    searchingBy,
    videos,
  });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "UPLOAD" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.videoDetail(newVideo.id));
  //to do :비디오 업로드 및 저장
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "VIDEO DETAIL", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "EDIT VIDEO" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "DELETE VIDEO" });
