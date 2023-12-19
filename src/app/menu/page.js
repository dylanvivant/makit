"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { kelson } from "@/app/fonts/kelson/kelson";
import { kaushan } from "@/app/fonts/kaushan/kaushan";

import "../page.min.css";
import "./style.css";

import { MdEmojiObjects } from "react-icons/md";

export default function Page() {

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

    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    };

    const projectClick = () => {
        router.push("/#project");
    };

    const aboutClick = () => {
        router.push("/#about");
    };

    const contactClick = () => {
        router.push("/#contact");
    };


    return (
        <div className="menus">
            <div className="navbar">
                <div className="close" onClick={handleClick}>
                    <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g>
                            <path
                                className='vector'
                                d="M34 25.5V34H25.5L0 8.5V0H8.5L34 25.5Z"
                            />
                            <path
                                className='vector'
                                d="M8.5 34H0V25.5L25.5 0H34V8.5L8.5 34Z"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_5_118">
                                <rect width="34" height="34" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="dark-mode" onClick={toggleDarkMode}>
                    <MdEmojiObjects />
                </div>
            </div>
            <section className="menu-contenu">
                <div onClick={projectClick} className="menu-container">
                    <div className={kelson.className}>
                        <span
                            className=
                            "titre-container"

                        >
                            PROJECTS
                        </span>
                    </div>
                    <div className={kaushan.className}>
                        <span
                            className=
                            "hover-container"

                        >
                            project
                        </span>
                    </div>
                </div>

                <div onClick={aboutClick} className="menu-container">
                    <div className={kelson.className}>
                        <span
                            className=
                            "titre-container"

                        >
                            À PROPOS
                        </span>
                    </div>
                    <div className={kaushan.className}>
                        <span
                            className="hover-container"

                        >
                            à propos
                        </span>
                    </div>
                </div>

                <div onClick={contactClick} className="menu-container">
                    <div className={kelson.className}>
                        <span
                            className=
                            "titre-container"

                        >
                            CONTACT
                        </span>
                    </div>
                    <div className={kaushan.className}>
                        <span
                            className=
                            "hover-container"

                        >
                            contact
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}
