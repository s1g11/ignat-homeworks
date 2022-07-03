import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.headerContainer}>
            <div className={s.header}>
                <NavLink className={s.navLink} to='/pre-junior'>Pre-Junior</NavLink>
                <NavLink className={s.navLink} to='/junior'>Junior</NavLink>
                <NavLink className={s.navLink} to='/junior-plus'>Junior Plus</NavLink>
            </div>
        </div>
    )
}

export default Header
