import React from 'react'
import Image from 'next/image'

export default function img(props) {

    return (


        <Image className={props.className} src={props.imgSrc} alt={props.alt} width={props.width} height={props.height} />
    )

}
