import { User } from "../models/users.model"
import sortedByDate from "./sortedByDate"

describe("sorting-helper", () => {
    describe("sortByDate", () => {
        const data: User[] = [
            {
                id: "1",
                registration_timestamp: 1658811910,
                email: "",
                name: "",
                phone: "",
                position: "",
                position_id: "",
                photo: ""
            },
            {
                id: "2",
                registration_timestamp: 1658811959,
                email: "",
                name: "",
                phone: "",
                position: "",
                position_id: "",
                photo: ""
            },
            {
                id: "3",
                registration_timestamp: 1658811940,
                email: "",
                name: "",
                phone: "",
                position: "",
                position_id: "",
                photo: ""
            },
            {
                id: "4",
                registration_timestamp: 1658811905,
                email: "",
                name: "",
                phone: "",
                position: "",
                position_id: "",
                photo: ""
            },
            {
                id: "5",
                registration_timestamp: 1658811901,
                email: "",
                name: "",
                phone: "",
                position: "",
                position_id: "",
                photo: ""
            },
            {
                id: "6",
                registration_timestamp: 1658811900,
                email: "",
                name: "",
                phone: "",
                position: "",
                position_id: "",
                photo: ""
            },
        ]

        it("should sort", () => {
            const res = sortedByDate(data, [])

            expect(res[0].id).toBe("2")
            expect(res[1].id).toBe("3")
            expect(res[2].id).toBe("1")
            expect(res[3].id).toBe("4")
            expect(res[4].id).toBe("5")
            expect(res[5].id).toBe("6")
        })
    })
})

export {}