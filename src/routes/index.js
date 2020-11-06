import Dashboard from "../pages/Dashboard";

export const routePaths = {
  dashboard: "/dashboard"
};

export const authRoutes = [
  {
    title: "Dashboard",
    path: routePaths.dashboard,
    url: routePaths.dashboard,
    exact: true,
    main: Dashboard
  },
  {
    title: "Home",
    path: "*",
    url: "*",
    exact: true,
    main: Dashboard
  }  // eslint-disable-line
];

export const unAuthRoutes = [];
