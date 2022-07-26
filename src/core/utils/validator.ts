import { stringPatterns } from "../constants/stringPatterns"

export interface ValidData {
    name: string
    email: string
    phone: string
    position_id: number
}

export interface Errors {
    name?: string
    email?: string
    phone?: string
}

const validator = ({email, name, position_id, phone}: ValidData) => {
    const errors: Errors = {
    }


    const {emailPattern, phoneNumberPuttern} = stringPatterns

    if(!name.length) {
        errors.name = "Required"
    } else if (name.length > 60 || name.length < 2) {
        errors.name = 'Name must be bettwen 60 and 2 characters';
    }

    if(!email.length) {
        errors.email = "Required"
    } else if (email.length > 100 && email.length < 2) {
        errors.email = 'Email must be bettwen 60 and 2 characters'
    } else if (!emailPattern.test(email)) {
        errors.email = "Email is not valid"
    }

debugger
    if(!phone.length) {
        errors.phone = "Required"
    } else if (!phoneNumberPuttern.test(phone)) {
        errors.phone = "Number is not valid"
    }

    if(Object.keys(errors).length === 0) {
        return true
    } else {
        return errors
    }
}

export default validator