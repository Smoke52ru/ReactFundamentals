import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = ({...props}) => {
    const {isAuth, isLoading} = useContext(AuthContext)
    console.log(`isAuth = ${isAuth}`)

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div {...props}>
            {isAuth
                ?
                <Routes>
                    {privateRoutes.map((route) =>
                        <Route key={route.path}
                               path={route.path}
                               element={route.element}/>
                    )}
                </Routes>
                :
                <Routes>
                    {publicRoutes.map((route) =>
                        <Route key={route.path}
                               path={route.path}
                               element={route.element}/>
                    )}
                </Routes>
            }
        </div>
    );
};

export default AppRouter;