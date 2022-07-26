import { User } from "../models/users.model"

const sortedByDate = (newData: User[], currentData: User[] = [], ): User[] => {
    const mergedArrays = [...currentData, ...newData]

    return mergedArrays.sort((a, b) => {
        return b.registration_timestamp - a.registration_timestamp
    })
}

export default sortedByDate