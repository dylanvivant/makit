'use client'
import React from 'react'

import { MdEmojiObjects } from "react-icons/md";
import '../style.css'
import '../../../page.min.css'

export default function darkmode(props) {
    return (
        <div className='mode' onClick={props.click}>
            <div className='framemode' />
            <div className="darkmode"> <MdEmojiObjects /> </div>
        </div>
    )
}
