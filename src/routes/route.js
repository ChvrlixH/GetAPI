import React from "react";
import Home from "../pages/Site/Home/Home";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/Admin/Dahboard/Dashboard";
import Coins from "../pages/Admin/Coins/Coins";
import CoinDetail from "../pages/CoinDetail/CoinDetail";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "Coins",
        element: <Coins />,
      },
      {
        path: "CoinDetail",
        element: <CoinDetail/>,
      },
      {
        path: "CoinDetail:id",
        element: <CoinDetail/>,
      },
    ],
  },
];
