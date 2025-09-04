import React from 'react'
import '../styles/Footer.css'
import card1img from '../assets/card1.svg'
import card2img from '../assets/card2.jpg'
import card3img from '../assets/card3.svg'
import card4img from '../assets/card4.svg'
import card5img from '../assets/card5.jpg'
import card6img from '../assets/card6.jpg'
function Footer() {
    return (
        <footer>
            <div className="container">
                <ul className='footer__links'>
                    <li><a href="#" className='footer__link'><i class="fa-solid fa-phone"></i> <br /> Call: 123-456-7890</a></li>
                    <li><a href="#" className='footer__link'><i class="fa-solid fa-envelope"></i> <br /> Email: email@example.com</a></li>
                    <li><a href="#" className='footer__link'><i class="fa-solid fa-location-dot"></i><br /> Address: Alexandria, Egypt</a></li>
                </ul>
                <div className="row">
                    <div className="quickLinks">
                        <h4>Quick Links</h4>
                        <ul className='row'>
                            <li><a href="#" className='quick__link'>Home</a></li>
                            <li><a href="#" className='quick__link'>About</a></li>
                            <li><a href="#" className='quick__link'>Furniture</a></li>
                            <li><a href="#" className='quick__link'>Blog</a></li>
                            <li><a href="#" className='quick__link'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="instgramFeeds">
                        <h4>Instgram Feeds</h4>
                        <ul className='row'>
                            <li><a href="#" className='instgram__link'><img src={card1img} alt="" /></a></li>
                            <li><a href="#" className='instgram__link'><img src={card2img} alt="" /></a></li>
                            <li><a href="#" className='instgram__link'><img src={card3img} alt="" /></a></li>
                            <li><a href="#" className='instgram__link'><img src={card4img} alt="" /></a></li>
                            <li><a href="#" className='instgram__link'><img src={card5img} alt="" /></a></li>
                            <li><a href="#" className='instgram__link'><img src={card6img} alt="" /></a></li>
                        </ul>
                    </div>
                    <div className="signup">
                        <h4>Sign Up To Our Newsletter</h4>
                        <input type="email" placeholder='Enter Your Email' />
                        <button className='mainButton'>Subscribe</button>
                        <div className="signup__icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <p>&copy; 2023 New Home. All rights reserved</p>

            </div>
        </footer>
    )
}

export default Footer
