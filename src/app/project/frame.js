'use client'
import React, { useState, useEffect } from 'react'

import { kelson } from '@/app/fonts/kelson/kelson.js'
import { kaushan } from '@/app/fonts/kaushan/kaushan.js'

import Bento from '../component/frame/menu/bento.js'
import Language from '../component/frame/menu/language.js'
import Darkmode from '../component/frame/menu/darkmode.js'


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

    </div>

  )
}
