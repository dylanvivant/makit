import React from 'react'

export default function img(props) {
    return (
        <img className={props.className} src={props.imgSrc} alt={props.alt} />
    )
}
