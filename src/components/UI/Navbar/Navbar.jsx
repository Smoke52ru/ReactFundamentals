import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/context";
import MyButton from "../button/MyButton";
import classes from "./Navbar.module.css"

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <nav className={classes.navbar}>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className={classes.navbar__links}>
                <Link to="/chess" className={classes.navbar__link}>Шахматы</Link>
                <Link to="/posts" className={classes.navbar__link}>Посты</Link>
                <Link to="/redux" className={classes.navbar__link}>Redux</Link>
                <Link to="/about" className={classes.navbar__link}>О сайте</Link>
            </div>
        </nav>
    );
};

export default Navbar;