'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation';

import { kelson } from '@/app/fonts/kelson/kelson.js'
import { kaushan } from '@/app/fonts/kaushan/kaushan.js'
import { project as Project } from '../data/project.js'

import Bento from '../component/frame/menu/bento.js'
import Language from '../component/frame/menu/language.js'
import Darkmode from '../component/frame/menu/darkmode.js'

import Img from './img.js'


import '../component/frame/style.css'
import '../page.min.css'

export default function frame(props) {

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
  const [activeBanner, setActiveBanner] = useState(0);

  const nextImg = () => {
    if (Project && Project[activeBanner] && Project[activeBanner].pictures && Project[activeBanner].pictures.length > 1) {
      const nextIndex = (activeBanner + 1) % Project[activeBanner].pictures.length;
      if (Project[nextIndex] && Project[nextIndex].id === Project[activeBanner].id) {
        setActiveBanner(nextIndex);
      } else {
        setActiveBanner(0);
      }
    }
  }

  const prevImg = () => {
    if (Project && Project[activeBanner] && Project[activeBanner].pictures) {
      const prevIndex = (activeBanner - 1 + Project[activeBanner].pictures.length) % Project[activeBanner].pictures.length;
      if (Project[prevIndex] && Project[prevIndex].id === Project[activeBanner].id) {
        setActiveBanner(prevIndex);
      } else {
        setActiveBanner(Project[activeBanner].pictures.length - 1);
      }
    }
  }





  return (
    <div className='frame'>

      <div className="title">
        <div className="frametitle">
          <div className={kelson.className}>
            <h3 className='textmaj'>MAKE IT</h3>
          </div>
          <div className={kaushan.className}>
            <h3 className='textcurs'>differently</h3>
          </div>
        </div>
      </div>

      <div className="navigation">
        <Bento />
        {/* <Language /> */}
        <Darkmode click={toggleDarkMode} />
      </div>

      <div className="arrow">

        <div className="arrowleft" onClick={prevImg}>

          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10.354 1.646a.5.5 0 010 .708L5.707 8l4.647 4.646a.5.5 0 11-.708.708l-5-5a.5.5 0 010-.708l5-5a.5.5
            0 01.708 0z" clipRule="evenodd" />
          </svg>

        </div>

        <div className="arrowright" onClick={nextImg}>

          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">

            <path fillRule="evenodd" d="M5.646 1.646a.5.5 0 010 .708L10.293 8

            5.646 12.646a.5.5 0 11-.708-.708l5-5a.5.5 0

            010-.708l-5-5a.5.5 0 01.708 0z" clipRule="evenodd" />

          </svg>

        </div>

      </div>

      {Project.map((project) => (
        <div key={project.id}>
          {project.pictures.map((imgSrc, index) => (
            <Img
              className={`img-banner ${index === activeBanner ? "active-banner" : ""}`}
              imgSrc={imgSrc}
              key={index}
              title={project.name}
            />
          ))}
        </div>
      ))}
    </div>

  )
}
