import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    kelson_regular,
    kelson,
    kelson_meduim
} from '@/app/fonts/kelson/kelson';

import '../../../page.min.css';

export default function Ligne(props) {

    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const router = useRouter();



    return (
        <Link
            href={{
                pathname: `/project/${props.id}`,
                query: { id: props.id }
            }}
            onMouseEnter={() => {
                handleMouseEnter();
            }}
            onMouseLeave={handleMouseLeave} >

            <span className={isHovered ? kelson.className : kelson_meduim.className}>
                {props.name}
            </span>
            <span className={kelson_regular.className}>{props.category}</span>
        </Link >
    );
}
