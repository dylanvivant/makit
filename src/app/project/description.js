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
