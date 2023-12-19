'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { kelson, kelson_meduim, kelson_regular, kelson_light } from '@/app/fonts/kelson/kelson.js'
import { kaushan } from '@/app/fonts/kaushan/kaushan.js'

import { about } from '@/app/data/about.js'

import './style.css'

export default function About() {

    const [isGithubHovered, setIsGithubHovered] = useState(false);
    const [isLinkedinHovered, setIsLinkedinHovered] = useState(false);


    const handleGithubEnter = () => {
        setIsGithubHovered(true);
    };

    const handleGithubLeave = () => {
        setIsGithubHovered(false);
    };

    const handleLinkedinEnter = () => {
        setIsLinkedinHovered(true);
    };

    const handleLinkedinLeave = () => {
        setIsLinkedinHovered(false);
    };


    return (
        <div className='about'>
            <div className="content">
                <div className="aboutme">
                    <div className="titleabout">
                        <h3 className={kelson_meduim.className}>À PROPOS</h3>
                    </div>
                    <div className="textabout">
                        <p className={kelson_regular.className}>

                            Bonjour, je suis Dylan, un passionné avant tout. Ma première passion, le graphisme, m&apos;a conduit sur un chemin d&apos;apprentissage autodidacte, principalement grâce à Internet, où YouTube est devenu mon meilleur ami. Aujourd&apos;hui, je suis un développeur front-end junior, avide de défis et constamment avide d&apos;apprendre. Depuis le début de mes études, je suis fier d&apos;appeler Nantes ma maison, mais je suis tout aussi ouvert à de nouvelles aventures, peu importe où elles me mènent, même jusqu&apos;à Mars. Mon parcours unique et ma soif de connaissances me permettent de créer des expériences web exceptionnelles. Explorez mon portfolio pour découvrir comment je combine ma passion pour le graphisme avec mes compétences en développement front-end pour donner vie à des projets exceptionnels. Prêt à collaborer sur de nouveaux projets passionnants ? N&apos;hésitez pas à me contacter !
                        </p>
                    </div>
                </div>
                <div className="social">
                    <Link href={"https://github.com/dylanvivant"} >
                        <div className="social-link" onMouseEnter={handleGithubEnter}
                            onMouseLeave={handleGithubLeave}>
                            <h3 className={isGithubHovered ? kelson.className : kelson_meduim.className}>GITHUB</h3>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V24.57H24.57V18.4275H21.4987V21.4987H3.07125V3.07125H6.1425V0H0ZM12.285 0L16.8919 4.60687L9.21375 12.285L12.285 15.3562L19.9631 7.67812L24.57 12.285V0H12.285Z" fill="var(--icon-color)
                                " />
                            </svg>
                        </div>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/dylan-vivant/"} >
                        <div id='linkedin' className="social-link" onMouseEnter={handleLinkedinEnter}
                            onMouseLeave={handleLinkedinLeave}>
                            <h3 className={isLinkedinHovered ? kelson.className : kelson_meduim.className}>LINKEDIN</h3>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V24.57H24.57V18.4275H21.4987V21.4987H3.07125V3.07125H6.1425V0H0ZM12.285 0L16.8919 4.60687L9.21375 12.285L12.285 15.3562L19.9631 7.67812L24.57 12.285V0H12.285Z" fill="var(--icon-color)" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="image">
                <img className='about-image' src={about[0].cover} alt="" />
            </div>
        </div>
    )
}
