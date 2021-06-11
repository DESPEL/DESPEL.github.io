import React from 'react'
import style from './skills.module.css'

export const SkillCard = ({children, right}) => {
    return (
        <div className={`${style.card} ${right ? style.right : style.left}`}>
            <div className={style.content}>
                {children}
            </div>
        </div>
    )
}