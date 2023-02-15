import React from "react";

import Home from '../pages/Home'
import LerMais from '../pages/LerMais'
import Post from '../pages/Post'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/lermais/:id",
    element: <LerMais/>,
  },
  {
    path: "/post",
    element: <Post/>,
  },

]);

function Rotas(){
  return(
    <RouterProvider router={router} />
  )
}
export default Rotas