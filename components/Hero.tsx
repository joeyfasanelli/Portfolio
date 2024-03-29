import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import ProfileImage from '../images/joey-film-image_40_1_70.jpeg'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name's Joey",
            "Part-time-film-enthusiast.tsx",
            "<WhoLoves/> <ToCode/>",
        ],
        loop: true,
        delaySpeed: 1500,
    });

    return(
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image src={ProfileImage} alt="" className="relative rounded-full h-32 w-32 mx-auto object-cover" />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software<br></br>Engineer</h2>
            <h1 className="text-5xl lg:text-4xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
            </h1>
            <div className="pt-5">
                <Link href="#about">
                <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Hero