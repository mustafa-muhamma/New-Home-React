function Card({ card }) {
    return (
        <div className="card">
            <div className="card__img">
                <img src={card.img} alt="card" />
            </div>
            <div className="card__content">
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                {card.price && <h3>{card.price}</h3>}
                <div className="cardButton">
                    {card.price ? <a href="#">Buy Now</a> : <button className='mainButton'>Read More</button>}
                </div>
            </div>
        </div>
    )
}

export default Card
