import "./Cards-layout.scss";
import Card from "./Card"

const Cards = () => {
    return (
        <div className="cards">
            <div className="cards__inner">
                <h1 className="cards__title">Working with GET request</h1>
                <div className="cards__content">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="cards__button">
                    Show more
                </div>
            </div>
        </div>
    )
}

export default Cards