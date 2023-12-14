'use client'
import React, { useEffect, useState } from 'react'

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
            root.setProperty('--title-texte-color', '#fff');
            root.setProperty('--title-texte-hover', '#AD00FF');
            root.setProperty('--navigation-color', '#fff');
            root.setProperty('--navigation-hover', '#AD00FF');
            root.setProperty('--navigation-active', '#AD00FF');
            root.setProperty('--border-color', '#AD00FF');
        } else {
            root.setProperty('--background-color', '#fff');
            root.setProperty('--text-color', '#212121');
            root.setProperty('--title-texte-color', '#AD00FF');
            root.setProperty('--title-texte-hover', '#AD00FF');
            root.setProperty('--navigation-color', '#212121');
            root.setProperty('--navigation-hover', '#AD00FF');
            root.setProperty('--navigation-active', '#AD00FF');
            root.setProperty('--border-color', '#212121');
        }
    });

    return (
        <>
            <h1 onClick={toggleDarkMode}>Hello</h1>
        </>
    )
}
