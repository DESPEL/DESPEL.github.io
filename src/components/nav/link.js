import React from 'react'
import style from './nav.module.css'
import { NavLink } from 'react-router-dom'


export const NavLinkUnderline = ({to, children}) => {
    return (
        <NavLink exact to={to} className={style.link} activeClassName={style.activeLink}>
            {children}
        </NavLink>
    )
}