import { SuccessedPost, SuccessfulResponse } from "../models/api.models"
import { Position } from "../models/users.model"

const APIUrl = "https://frontend-test-assignment-api.abz.agency/api/v1/"


const usersAPI = {
    getUsers: (page: number) => {
        return fetch(`${APIUrl}users?page=${page}&count=6`)
            .then(response => response.json())
            .then(response => response) as Promise<SuccessfulResponse> 
    },
    postUser: (user: FormData) => 
        fetch(`${APIUrl}users` , {
        method: "POST",
        body: user,
        headers: {
            "Token": JSON.stringify(localStorage.getItem("token")),
        }
        
    })
    .then(response => response.json())
    .then(response => response) as Promise<SuccessedPost>,
    
    getPositions: () => {
        return fetch(`${APIUrl}positions`)
        .then(response => response.json())
        .then(response => response.positions) as Promise<Position[]>
    },
    getToken: () => {
        return fetch(`${APIUrl}token`)
        .then(response => response.json())
        .then(response => response.token)
    }
}

export default usersAPI