import '../styles/OurFurniture.css'
import card1img from '../assets/card1.svg'
import card2img from '../assets/card2.jpg'
import card3img from '../assets/card3.svg'
import card4img from '../assets/card4.svg'
import card5img from '../assets/card5.jpg'
import card6img from '../assets/card6.jpg'
import Cards from './Cards/Cards'
function OurFurniture() {
    const data = [{
        id: 1,
        img: card1img,
        title: "Lazy Couch",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
        price: "$200"
    }, {
        id: 2,
        img: card2img,
        title: "Modern Chair",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
        price: "$250"
    }, {
        id: 3,
        img: card3img,
        title: "Living Room",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
        price: "$300"
    }, {
        id: 4,
        img: card4img,
        title: "Living Room",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
        price: "$150"
    }, {
        id: 5,
        img: card5img,
        title: "Living Room",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
        price: "$200"
    }, {
        id: 6,
        img: card6img,
        title: "Living Room",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
        price: "$250"
    }]
    return (

        <section className="ourFurniture">
            <div className="container">
                <div className="ourFurniture__header">
                    <h2>Our Furniture</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.</p>
                </div>
                <div className="ourFurniture__Cards">
                    <div className="row">
                        <Cards data={data} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFurniture
