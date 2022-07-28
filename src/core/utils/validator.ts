import { stringPatterns } from "../constants/stringPatterns"

export interface ValidData {
    name: string
    email: string
    phone: string
}

export interface Errors {
    name: boolean
    email: boolean
    phone: boolean
    position_id: boolean
    photo: boolean
}



const validator = (value: string, name: string) => {

    const { emailPattern, phoneNumberPuttern } = stringPatterns

    switch (name) {
        case "name":
            if (!value.length) return "Required"
            if (value.length < 2) return "Less then 2 characters"
            if (value.length > 60) return "More then 60 characters"
            return false;
        case "email":
            if (!value.length) return "Required"
            if (value.length < 2) return "Less then 2 characters"
            if (value.length > 100) return "More then 100 characters"
            if (!emailPattern.test(value)) return "Email is not valid"
            return false
        case "phone":
            if (!value.length) return "Required"
            if (!phoneNumberPuttern.test(value)) return "Number is not valid"
            return false
    }

}


export const isValidForm = (errors: Errors) => {
    return errors.name || errors.email || errors.phone || errors.position_id  || errors.photo
}
export const isPhotoValid = (photo: File) => {
    if (photo.type === "image/jpeg") {
        if (photo.size < 5e+6) {
            return photo
        }
    } else {
        return false
    }
}

export default validator