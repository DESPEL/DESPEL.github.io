import React from 'react'

import style from './skills.module.css'

import { SkillCard } from './skillcard'

const cardLeftFragment = (children, right) => {
    if (right)
        return (
            <div></div>
        )
    return (
        <SkillCard >
            {children}
        </SkillCard>
    )
}

const cardRightFragment = (children, right) => {
    if (right)
        return (
            <SkillCard right>
                {children}
            </SkillCard>
        )
    return (
        <div></div>
    )
}

export const SkillRow = ({children, title, right}) => {
    return (
        <div className={style.skillRow}>
            {cardLeftFragment(children, right)}
            <div className={style.skillType}>
                <p className={style.skillName}>{title}</p>
            </div>
            {cardRightFragment(children,right)}
        </div>
    )
}