'use client'
import React from 'react'
import Link from 'next/link'
import { kelson_regular } from '@/app/fonts/kelson/kelson'

import '../style.css'

export default function language() {
    return (
        <div className='mode'>
            <div className="framemode" />
            <Link href={"#"}>
                <div className={kelson_regular.className}>
                    <span id='en'>en</span>
                    <span id='fr'>fr</span>
                </div>
            </Link>
        </div>
    )
}
