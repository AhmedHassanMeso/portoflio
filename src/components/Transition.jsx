import React, { useRef, useEffect } from 'react'
import { gsap, Power4 } from "gsap";
import Logo from '../assets/img/logo.svg'
import { TextPlugin } from "gsap/TextPlugin";


import Me from '../assets/img/me.png'
import Linked from '../assets/img/linked.svg'
import Behance from '../assets/img/behance.svg'
import Github from '../assets/img/github.svg'


const Transition = () => {
    const introRef = useRef();
    const firstRef = useRef();
    const secondRef = useRef();
    const logoRef = useRef();
    const thirdRef = useRef();

    gsap.registerPlugin(TextPlugin);
    const boxRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        gsap.from(boxRef.current, { opacity: 1, x: -150, stagger: 0.1, ease: "back", duration: 4 });

    })

    useEffect(() => {
        const t1 = gsap.timeline({ repeat: -1 });
        t1.to(textRef.current, { text: "Creative Developer", duration: 2, delay: 0 });
        t1.to(textRef.current, { text: "UX Researcher", duration: 2, delay: 2 });
        t1.to(textRef.current, { text: "UI Designer", duration: 2, delay: 2 });
        t1.to(textRef.current, { text: "Front-end Developer", duration: 2, delay: 2 });
    });


    useEffect(() => {
        const t1 = gsap.timeline({});
        t1.fromTo(introRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1 });
        t1.to(introRef.current, { opacity: 0, display: "none" });
        t1.fromTo(firstRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1 });
        t1.fromTo(secondRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 2 });
        t1.from(logoRef.current, { rotation: 360 });
        t1.to(logoRef.current, { opacity: 0 });
        t1.fromTo(thirdRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1 });
    })

    return (
        <div>
            <div ref={introRef} className='h-screen w-screen bg-dark'>

            </div>
            <div>
                <div ref={secondRef} className='h-max w-screen bg-primary '>
                    <div className='flex justify-center' >
                        <img ref={logoRef} className='m-auto absolute top-0 left-0 right-0 bottom-0' src={Logo} alt="" />
                        <div ref={thirdRef} >
                            <div className='grid h-max custom:grid-cols-8 mt-20'>
                                <div ref={boxRef} className='w-fit custom:ml-32 overflow-hidden col-span-5 text-left mx-10 custom:justify-start'>
                                    <h1 className='text-xl font-poppins-r ml-1'> Hey, my name is</h1>
                                    <h1 className='text-9xl mt-1 mb-5 font-bebas text-transparent bg-clip-text  
                                    bg-gradient-to-r from-cyan via-purple to-red'>Ahmed Hassan</h1>
                                    <h1 className='text-3xl mb-5 font-poppins-sb'>And i am a <span className='text-transparent bg-clip-text  
                                    bg-gradient-to-r from-cyan via-purple to-red' ref={textRef}></span></h1>
                                    <h1 className='text-base max-w-md font-poppins-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Tincidunt nunc orci tristique a donec dictumst tristique adipiscing.
                                        Aliquet netus hac ultricies velit pellentesque ut euismod eget sit.
                                    </h1>
                                    <ul className='flex mt-10'>
                                        <li className='mb-8 mr-7'> <a href="/#"> <img className='w-12' src={Linked} alt="" /></a></li>
                                        <li className='mb-8 mr-7'> <a href="/#"> <img className='w-12' src={Behance} alt="" /></a></li>
                                        <li className='mb-8'> <a href="/#" > <img className='w-12' src={Github} alt="" /></a></li>
                                    </ul>
                                </div>
                                <div className='flex w-5/6 ml-14 custom:ml-0 col-span-3 overflow-hidden justify-self-center'>
                                    <div className='flex justify-self-center mt-10'>
                                        <img className='heroImg object-scale-down pr-10 ' src={Me} alt="Ahmed Hassan" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Transition