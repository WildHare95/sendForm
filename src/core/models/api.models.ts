import { User } from "./users.model"

export interface SuccessfulResponse {
    success: boolean
    page: number
    total_pages: number
    total_users: number
    count: number
    links: {
        next_url: string
        prev_url: null
    },
    users: User[]
}

export interface NotFoundResponse {
    success: boolean
    message: "Page not found"
}

export interface SuccessedPost {
    success: boolean
    user_id?: number
    message: string
}
