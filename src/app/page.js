'use client'
import React, { useEffect, useState, useRef } from 'react'

// import component

import FirstWindow from '@/app/component/firstwindow/FirstWindow'
import Frame from '@/app/component/frame/frameproject'

import './page.min.css'


export default function Home() {

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

    // Scroll function

    const section1Ref = useRef();
    const section2Ref = useRef();

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Lorsque 50 % de la section est visible
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                const sectionDiv = entry.target.querySelector(".observe-me"); // Classe personnalisée
                if (entry.isIntersecting && sectionDiv) {
                    sectionDiv.classList.add("show");
                    sectionDiv.classList.remove("hidden");
                } else if (sectionDiv) {
                    sectionDiv.classList.remove("show");
                    sectionDiv.classList.add("hidden");
                }
            });
        };

        const observer = new IntersectionObserver(
            handleIntersection,
            observerOptions
        );

        if (section1Ref.current) {
            observer.observe(section1Ref.current);
        }

        if (section2Ref.current) {
            observer.observe(section2Ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <main>
            <section ref={section1Ref} className='slider'>
                <div className='observe-me hidden'>
                    <FirstWindow
                        icon="icon"
                        click={toggleDarkMode}
                    />
                </div>

            </section>

            <section ref={section2Ref} id={'project'} className='slider'>
                <div className='observe-me hidden'>
                    <Frame
                        click={toggleDarkMode}
                    />

                </div>
            </section>
        </main>

    )
}
