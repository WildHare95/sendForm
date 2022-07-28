import { FC } from "react"
import { User } from "../../core/models/users.model"

interface Props {
    user: User
}

const Card: FC<Props> = ({ user }) => {
    return (
        <div className="card">
            <div className="card__inner">
                <div className="card__photo">
                    <img src={user.photo} alt="img" />
                </div>
                <div className="card__name"
                    data-title={user.name}
                >
                    {user.name}
                </div>
                <div className="card__info">
                    <div className="card__info-position">{user.position}</div>
                    <div className="card__info-email" data-title={user.email}>{user.email}</div>
                    <div className="card__info-phone" data-title={user.phone}>{user.phone}</div>
                </div>
            </div>
        </div>
    )
}

export default Card