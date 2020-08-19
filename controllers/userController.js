import routes from "../routers/routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "JOIN" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.render("join", { pageTitle: "Join" });
    res.status(400);
  } else {
    res.redirect(routes.home);
    //유져 등록 :할일
    //로그인 : 할일
  }
  res.render("join", { pageTitle: "JOIN" });
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "LOGIN" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  //to do : 로그아웃 처리 하기
  res.redirect(routes.home);
};
export const users = (req, res) => res.render("users", { pageTitle: "USERS" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "USER DETAIL" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EDIT PROFILE" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "CHANGE PASSWORD" });
