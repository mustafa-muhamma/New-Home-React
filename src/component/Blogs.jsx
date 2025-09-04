import React from 'react'
import Cards from './Cards/Cards';
import card1Img from '../assets/furniture1.jpg'
import card2Img from '../assets/furniture2.jpg'
import card3Img from '../assets/furniture3.jpg'
function Blogs() {
    const data = [{
        id: 1,
        img: card1Img,
        title: "Look even slightfully believable if you are",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
    }, {
        id: 2,
        img: card2Img,
        title: "Any thing emprassing hidden in the middle",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
    }, {
        id: 3,
        img: card3Img,
        title: "Molostias of passages of Lorem Ipsum available",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, atque.",
    }]
    return (
        <section className="ourBlogs ourFurniture">
            <div className="container">
                <div className="Blogs__header ourFurniture__header">
                    <h2>Latest Blogs</h2>
                </div>
                <div className="Blogs__Cards ourFurniture__Cards">
                    <div className="row">
                        <Cards data={data} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs
