import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(`isAuth = ${isAuth}`)

    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route, index) =>
                    <Route key={route.path}
                           path={route.path}
                           element={route.element}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, index) =>
                    <Route key={route.path}
                           path={route.path}
                           element={route.element}/>
                )}
            </Routes>
    );
};

export default AppRouter;