import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import kenny from '../../assets/profile2.png'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img  className='fine' src={kenny} alt="" />
        <h1><span>I'm Amusa Basirat kehinde,</span> frontend developer based in Nigeria.</h1>
        <p>I am a frontend developer from OYO state, Nigeria with 2 years of experience in mutiple companies like Microsoft, Tosla and Apple</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero