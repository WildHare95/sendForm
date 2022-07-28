export interface FormValues {
    name: string
    email: string
    phone: string
    photo: null | File,
    position_id: string
}

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
