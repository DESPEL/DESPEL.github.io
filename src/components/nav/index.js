import React from 'react'
import { Link } from 'react-router-dom'
import { NavLinkUnderline as LinkU } from './link'
import style from './nav.module.css'


export const NavBar = () => {
    return (
    <div className={style.container}>
        <div className={style.left}>
            <Link to='/'>
                <span className={style.primaryText}>despel</span>
                <span className={style.secondaryText}>.</span>
                <span className={style.primaryText}>dev</span>
            </Link>
        </div>
        <div className={style.right}>
            <LinkU to='/blog'>Blog</LinkU>
            <LinkU to='/contact'>Contact Me</LinkU>
            <LinkU to='/mywork'>My Work</LinkU>
            <LinkU to='/about'>About Me</LinkU>
            <LinkU to="/">Home</LinkU>
        </div>
    </div>
    )
}