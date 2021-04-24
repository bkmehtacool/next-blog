import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'


function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/bk.jpg" alt="BK" width={10} height={10} layout="responsive" />
            </div>
            <h1>Hi, I'm Next Js</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, tenetur.</p>
        </section>
    )
}

export default Hero
