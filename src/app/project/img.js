import React from 'react'
import Image from 'next/image'
import { IoMdArrowRoundBack } from "react-icons/io";



export default function img(props) {

    return (
        <div>
            <IoMdArrowRoundBack onClick={props.backIcon} className='backtoproject' />

            <Image className={props.className} src={props.imgSrc} alt={props.alt} width={props.width} height={props.height} />
        </div>
    )

}
