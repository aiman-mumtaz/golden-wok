import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <image src = '/images/ramen1.jpg'/>
            <h1>GOLDEN WOK</h1>
            <p>Where food speaks with your palate</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    BOOK A TABLE
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    SEE MENU
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
