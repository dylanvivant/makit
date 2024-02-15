import React from 'react'
import Image from 'next/image'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";




export default function img(props) {

    const router = useRouter();

    const backClick = () => {
        router.push("/#project");
    };

    return (
        <div>
            <IoMdArrowRoundBack onClick={backClick} className='backtoproject' />

            <Image className={props.className} src={props.imgSrc} alt={props.alt} width={props.width} height={props.height} />
        </div>
    )

}
