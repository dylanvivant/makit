'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { kelson } from '@/app/fonts/kelson/kelson.js'
import { kaushan } from '@/app/fonts/kaushan/kaushan.js'

import { project } from '@/app/data/project.js'

import Bento from '../component/frame/menu/bento.js'
import Language from '../component/frame/menu/language.js'
import Darkmode from '../component/frame/menu/darkmode.js'

import Img from './img.js'


import '../component/frame/style.css'
import '../page.min.css'

export default function frame(props) {


  return (
    <div className='frame'>
      <Link href={"/"}>
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
      </Link>
      <div className="navigation">
        <Bento />
        {/* <Language /> */}
        <Darkmode click={props.click} />
      </div>

    </div>
  )
}
