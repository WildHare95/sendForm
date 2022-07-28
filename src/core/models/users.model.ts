export interface User {
    id: string
    name: string
    email: string
    phone: string
    position: string
    position_id: string,
    registration_timestamp: number,
    photo: string
}

export interface PostUser {
    name: string
    phone: string
    email: string
    position: string
    photo: File | null
}

export interface Position { 
    id: string
    name: string
}