import '../styles/Hero.css'
import heroimg from '../assets/hero.png'
function Hero() {
    return (
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <div className="hero__content">
                        <div className="header">
                            <h1>For All Your Home Needs</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magnam aperiam unde eaque quas doloribus eveniet obcaecati exercitationem atque praesentium debitis, natus, inventore, nesciunt eligendi in blanditiis tempora impedit quibusdam.
                            </p>
                        </div>
                        <div className="hero__buttons">
                            <button className='mainButton secondColor'>Shop Now</button>
                            <button className='mainButton'>Learn More</button>
                        </div>
                    </div>
                    <div className="hero__img">
                        <img src={heroimg} alt="hero" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
