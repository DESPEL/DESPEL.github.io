import React from 'react'
import { SkillRow } from '../components'

import style from './home.module.css'

export const Home = () => {
    return (
        <div>
            <div className={style.spacing}></div>
            <p className={style.title}>David Espina</p>
            <p className={style.subtitle}>idk developer</p>
            <div className={style.spacing}></div>
            <p className={style.heading}>About Me</p>
            <p className={style.paragraph}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum, eveniet tenetur cumque expedita adipisci illo reiciendis dolorum, totam impedit assumenda quis? Sunt distinctio aliquam voluptate iusto maxime dicta accusantium a ad vel labore repudiandae quia beatae quis deleniti aspernatur nemo neque praesentium, in quisquam ex? Provident omnis, exercitationem perspiciatis corporis unde porro cum reprehenderit non eveniet cumque, nulla debitis distinctio, sunt similique blanditiis asperiores doloremque fugit quod cupiditate harum. Quia, eligendi aperiam repellendus beatae labore modi eius ipsum doloribus nisi voluptatem velit saepe ex, at quidem quos deleniti vel. Aperiam quasi rem voluptatum laborum. Culpa aperiam placeat voluptatum eos.</p>
            <p className={style.paragraph}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere asperiores excepturi alias consequatur corrupti quos animi esse ad, nobis nesciunt saepe fuga? Illo dicta quae voluptas hic amet eius, incidunt reiciendis voluptatem placeat exercitationem, veritatis rerum nobis odit nisi labore, totam autem tenetur sit. Iure at repellat provident alias?</p>
        
            <div className={style.spacing}></div>

            <p className={style.heading}>My Development Skills</p>
            <SkillRow title="Mobile Apps">
                <ul>
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>Swift UI</li>
                    <li>Kotlin</li>
                </ul>
            </SkillRow>

            <SkillRow title="Web" right>
                <ul>
                    <li>Node JS</li>
                    <li>JS / TS</li>
                    <li>React / Angular</li>
                    <li>MySQL / MongoDB</li>
                </ul>
            </SkillRow>

            <SkillRow title="Desktop">
                <ul>
                    <li>C/C++</li>
                    <li>Swift UI</li>
                    <li>Electron</li>
                    <li>Ionic</li>
                </ul>
            </SkillRow>

            <div className={style.spacing}></div>
        </div>
    )
}