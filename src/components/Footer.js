import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>Who Are We</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contact'>Share Your Views</Link>
                        <Link to='/'>Address</Link>
                        <Link to='/'>Telephone Number</Link>
                        <Link to='/'>Email</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/about'>Who Are We</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                    </div>

                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contact'>Share Your Views</Link>
                        <Link to='/'>Address</Link>
                        <Link to='/'>Telephone Number</Link>
                        <Link to='/'>Email</Link>
                    </div>
                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            GOLDEN WOK <i className='fas fa-utensils'/>
                        </Link>
                    </div>
                    <small className='website-rights'>GOLDEN WOK © 2020</small>

                    <div className='social-icons'>
                        <Link to='/' target='_blank' aria-label='Facebook' className='social-icon-link facebook'>
                        <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Instagram' className='social-icon-link instagram'>
                        <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Twitter' className='social-icon-link twitter'>
                        <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Youtube' className='social-icon-link youtube'>
                        <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to='/' target='_blank' aria-label='LinkedIn' className='social-icon-link linkedin'>
                        <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
