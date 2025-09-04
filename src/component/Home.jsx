import '../styles/Home.css'
import About from './About'
import Blogs from './Blogs'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import OurFurniture from './OurFurniture'

function Home() {
    return (
        < >
            <Navbar />
            <Hero />
            <OurFurniture />
            <About />
            <Blogs />
            <Footer />
        </>
    )
}

export default Home
