'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Frame from '@/app/project/frame'
import Img from '@/app/project/img'
import { project } from '@/app/data/project'

import '@/app/page.min.css'
import '@/app/component/frame/style.css'
export default function page() {

    // Dark mode function

    const [darkMode, setDarkMode] = useState((false));

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            setDarkMode(savedMode !== null ? JSON.parse(savedMode) : false);
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };

    useEffect(() => {
        const root = document.documentElement.style;
        if (darkMode) {
            root.setProperty('--background-color', '#212121');
            root.setProperty('--text-color', '#fff');
            root.setProperty('--title-text-color', '#fff');
            root.setProperty('--title-text-hover', '#AD00FF');
            root.setProperty('--navigation-color', '#fff');
            root.setProperty('--navigation-hover', '#fff');
            root.setProperty('--navigation-hover-active', '#212121');
            root.setProperty('--border-color', '#AD00FF');
            root.setProperty('--icon-color', '#fff');
        } else {
            root.setProperty('--background-color', '#fff');
            root.setProperty('--text-color', '#212121');
            root.setProperty('--title-text-color', '#AD00FF');
            root.setProperty('--title-text-hover', '#212121');
            root.setProperty('--navigation-color', '#212121');
            root.setProperty('--navigation-hover', '#212121');
            root.setProperty('--navigation-hover-active', '#fff');
            root.setProperty('--border-color', '#212121');
            root.setProperty('--icon-color', '#212121');

        }
    });

    // Image function

    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage(prevActiveImage =>
                prevActiveImage === project.length - 1 ? 0 : prevActiveImage + 1
            );
        }, 5000); // Change toutes les 5 secondes

        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    return (
        <main>
            <section className='slider'>
                <Frame click={toggleDarkMode} />

                {project.pictures.map((e, index) => (
                    <Img
                        key={index}
                        imgSrc={e}
                        alt={project.name}
                        className={`img-banner ${activeImage === index ? "active-banner" : ""}`}
                        onClick={() => setActiveImage(index)}
                    />
                ))}


            </section>
        </main>

    )
}
