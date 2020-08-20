import routes from "../routers/routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "HOME", videos });

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
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  res.redirect(routes.videoDetail(111111));
  //to do :비디오 업로드 및 저장
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "VIDEO DETAIL" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "EDIT VIDEO" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "DELETE VIDEO" });
