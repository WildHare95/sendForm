import "./Cards-layout.scss";
import Card from "./Card"
import { User } from "../../core/models/users.model";
import { useEffect, useState } from "react";
import { SuccessfulResponse } from "../../core/models/api.models";
import usersAPI from "../../core/ api/APIUsers";
import sortedByDate from "../../core/utils/sortedByDate";
import Preloader from "../Preloader/Preloader";

const Cards = () => {

    const [users, setUsers] = useState<User[]>([])
    const [currentPage, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)


    useEffect(() => {
        setUsers([])
        usersAPI.getUsers(currentPage).then((response: SuccessfulResponse) => {
            setTotalPages(response.total_pages)
            setUsers(sortedByDate(response.users))
        })
    }, [currentPage])

    return (
        <div className="cards">
            <div className="cards__inner">
                <h1 className="cards__title">Working with GET request</h1>
                <div className="cards__content">
                    {
                        users.map((user) => {
                            return <Card key={user.id} user={user} />
                        })
                    }
                    {
                        !users.length && <Preloader />
                    }
                    
                </div>
                {
                    currentPage !== totalPages &&
                    <button
                        onClick={() => setPage(page => page + 1)}
                        className="cards__button">
                        Show more
                    </button>
                }

            </div>
        </div>
    )
}

export default Cards