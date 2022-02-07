import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route,index)=>
                <Route key={index}
                       path={route.path}
                       element={route.element}/>
            )}


        </Routes>
    );
};

export default AppRouter;