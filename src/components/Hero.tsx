import React from 'react'

import {motion} from 'framer-motion'

import {ComputersCanvas} from './canvas'
import {styles} from '../styles'

const Hero = () => {
    return (
        <section className='relative h-screen w-full pt-[76px]'>
            <div className={`${styles.paddingX} absolute inset-0 mx-auto top-[120px] flex items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
                    <div className='w-1 h-40 sm:h-80 violet-gradient'/>
                </div>

                <div className=''>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm {' '}
                        <span className='text-[#915eff]'>Boris</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I love programming, developing, learning and problem solving.
                    </p>
                </div>

            </div>
            <ComputersCanvas/>
        </section>
    )
}

export default Hero