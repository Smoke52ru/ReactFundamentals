import React from "react";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import About from "../pages/About";

export const routes = [
    {path: '/', element: <Posts/>},
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/*', element: <Error/>},
]