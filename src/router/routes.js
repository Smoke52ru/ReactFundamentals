import React from "react";
import {Navigate} from "react-router-dom";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Login from "../pages/Login";
import Chess from "../pages/Chess";
import Redux from "../pages/Redux";
import TestQuestions from "../pages/TestQuestions";

export const privateRoutes = [
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>},
    {path: '/about', element: <About/>},
    {path: '/error', element: <Error/>},
    {path: '/login', element: <Navigate to="posts" replace/>},
    {path: '/chess', element: <Chess/>},
    {path: '/redux', element: <Redux/>},
    {path: '/test', element: <TestQuestions/>},
    {path: '/*', element: <Navigate to="chess" replace/>},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/*', element: <Navigate to="login" replace/>},
]