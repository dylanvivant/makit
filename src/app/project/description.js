import React from 'react'

import { kelson_meduim, kelson_regular, kelson_light } from '../fonts/kelson/kelson'
import { kaushan } from '../fonts/kaushan/kaushan'

import '../page.min.css'

export default function description(props) {
    return (
        <div className='description'>
            <div className="desc-title">
                <a href={props.url}>
                    <h2 className={kelson_meduim.className}>{props.title}</h2>
                    <svg width="28" height="28" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V24.57H24.57V18.4275H21.4987V21.4987H3.07125V3.07125H6.1425V0H0ZM12.285 0L16.8919 4.60687L9.21375 12.285L12.285 15.3562L19.9631 7.67812L24.57 12.285V0H12.285Z" fill="var(--title-text-color)" />
                    </svg>
                </a>
                <div className="years">
                    <h2 className={kelson_meduim.className}>ANNÉE</h2>
                    <p className={kaushan.className}>{props.years}</p>
                </div>
            </div>
            <div className="descriptions">
                <div className="categorie">
                    <h2 className={kelson_regular.className}>TECHNOLOGIE</h2>
                    <div id='technologie' className={kaushan.className}>
                        {props.technologie.map((tech, index) => (
                            <span key={index}>{tech}</span> // Chaque technologie dans son propre span
                        ))}
                    </div>                </div>
                <div className="desc">
                    <p className={kelson_light.className}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
