'use client'
import React from 'react'

import { MdEmojiObjects } from "react-icons/md";
import { kelson } from '@/app/fonts/kelson/kelson';
import { kaushan } from '@/app/fonts/kaushan/kaushan';
import './style.css'

export default function FirstWindow(props) {
    return (
        <div className='firstwindow'>
            <MdEmojiObjects id='light' className={props.icon} onClick={props.click} />
            <div className='bandtitle'>
                <div className={kelson.className}>
                    <h1 id='titlemaj'>
                        MAKE IT
                    </h1>
                </div>
                <div className={kaushan.className}>
                    <span id='titlehover'>
                        differently
                    </span>
                </div>
            </div>
        </div>
    )
}
