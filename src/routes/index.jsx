import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home";
import Booking from "../pages/booking/booking";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import MovieDetail from "../pages/movie-detail/movie-detail";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/booking/:maLichChieu",
          element: <Booking />,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetail />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return routing;
}
