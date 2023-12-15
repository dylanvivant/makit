'use client'
import React from 'react'

import { kelson } from '@/app/fonts/kelson/kelson.js'
import { kaushan } from '@/app/fonts/kaushan/kaushan.js'

import Bento from './menu/bento.js'
import Language from './menu/language.js'
import Darkmode from './menu/darkmode.js'

import './style.css'

export default function frame(props) {
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
        <Darkmode click={props.click} />
      </div>

    </div>

  )
}
