'use client'
import React from 'react'
import Link from 'next/link'

import '../style.css'
import '../../../page.min.css'


export default function bento() {
    return (
        <div className="menu">
            <Link href={"/menu"}>
                <div className="framebento" />
                <div className="bentomenu">
                    <div className="vector" style={{ left: 12.75, top: 0 }}></div>
                    <div className="vector" style={{ left: 25.50, top: 0 }}></div>
                    <div className="vector" style={{ left: 0, top: 0 }}></div>
                    <div className="vector" style={{ left: 0, top: 25.50 }}></div>
                    <div className="vector" style={{ left: 12.75, top: 25.50 }}></div>
                    <div className="vector" style={{ left: 25.50, top: 25.50 }}></div>
                    <div className="vector" style={{ left: 0, top: 12.75 }}></div>
                    <div className="vector" style={{ left: 12.75, top: 12.75 }}></div>
                    <div className="vector" style={{ left: 25.50, top: 12.75 }}></div>
                </div>
                <div className="bentohover">
                    <div className="vector" style={{ left: 0, top: 0, background: 'white' }}></div>
                    <div className="vector" style={{ width: 8.50, height: 34, left: 12.78, top: 0, background: '#AD00FF' }}></div>
                    <div className="vector" style={{ left: 25.50, top: 0, background: 'white' }}></div>
                    <div className="vector" style={{ left: 0, top: 25.50, background: 'white' }}></div>
                    <div className="vector" style={{ left: 25.50, top: 25.50, background: 'white' }}></div>
                    <div className="vector" style={{ width: 34, height: 8.50, left: 0, top: 12.75, background: '#AD00FF' }}></div>
                </div>
            </Link>
        </div>)
}
