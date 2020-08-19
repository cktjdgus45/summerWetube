import routes from "./routers/routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WETUBE";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
