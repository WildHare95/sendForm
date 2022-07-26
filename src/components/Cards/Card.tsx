import pic from "../../assets/photo-cover.svg"

const Card = () => {
    return (
        <div className="card">
            <div className="card__inner">
                <div className="card__photo">
                    <img src={pic} alt="profile-photo" />
                </div>

                <div className="card__name">
                    Salvador Stewart Flynn Thomas Salva Salve...
                </div>
                <div className="card__info">
                    <div className="card__info-position"> Leading specialist of the department of cent...</div>
                    <div className="card__info-email">frontend_develop@gmail.com</div>
                    <div className="card__info-phone">+38 (098) 278 44 24</div>
                </div>
            </div>
        </div>
    )
}

export default Card