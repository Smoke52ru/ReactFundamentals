import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context/context";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    console.log(isAuth)

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