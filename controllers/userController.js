import passport from "passport";
import routes from "../routers/routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "JOIN" });
};
export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.render("join", { pageTitle: "Join" });
    res.status(400);
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "LOGIN" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const me = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail", user: req.user });
  console.log(req.user);
};

export const users = (req, res) => res.render("users", { pageTitle: "USERS" });
export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EDIT PROFILE" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "CHANGE PASSWORD" });

//social Login controller

export const githubLogin = passport.authenticate("github");

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      (user.githubId = id), (user.avatarUrl = avatar_url), user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        githubId: id,
        avatarUrl: avatar_url,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};
