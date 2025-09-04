import React from 'react'
import '../styles/Navbar.css'
function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <a href="#" className='nav__logo'>
                        New Home
                    </a>
                    <div className="navbar__links">
                        <ul className='row'>
                            <li><a href="#" className='nav__link'>Home</a></li>
                            <li><a href="#" className='nav__link'>About</a></li>
                            <li><a href="#" className='nav__link'>Furniture</a></li>
                            <li><a href="#" className='nav__link'>Blog</a></li>
                            <li><a href="#" className='nav__link'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="navbar__icons">
                        <ul className='row'>
                            <li><a href="#" className='nav__link'> <i className="fa-solid fa-user"></i> Login</a></li>
                            <li><a href="#" className='nav__link'><i className="fa-solid fa-magnifying-glass"></i></a></li>

                        </ul>
                    </div>
                    <i className="fa-solid fa-bars toggle"></i>
                </div>


            </div>
        </nav>
    )
}

export default Navbar
