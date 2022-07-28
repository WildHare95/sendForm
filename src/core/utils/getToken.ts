import usersAPI from "../ api/APIUsers"


const getToken = () => {
        const expDate = new Date(new Date().getTime() + 40 * 60 * 1000) 
        usersAPI.getToken().then(response => {
            localStorage.setItem("token", response)
            localStorage.setItem("date", expDate.toString())
        })
}

export default getToken