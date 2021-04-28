const publicRoutes = {
  LOGIN: "/iniciar-sesion",
  ABOUT: "/acerca-de",
  PRIVACY: "/privacidad",
};

const privateRoutes = {
  HOME: "/",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};

export default Routes;
