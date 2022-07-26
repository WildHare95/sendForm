import { SuccessfulResponse } from "../models/api.models"


const usersAPI = {
    getUsers: (page: number) => {
        return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
            .then(response => response.json())
            .then(response => response) as Promise<SuccessfulResponse> 
    }
}

export default usersAPI