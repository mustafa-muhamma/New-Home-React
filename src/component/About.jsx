import React from 'react'
import '../styles/About.css'
import aboutImg from '../assets/aboutImg.png'
function About() {
    return (
        <section className='about'>
            <div className="container">
                <div className="row">
                    <div className="about__img">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about__content">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,  Quisquam, atque.</p>
                        <div className="about__button">
                            <button className='mainButton'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default About
