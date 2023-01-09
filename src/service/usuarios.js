import { fetchRequest } from "../utils/request"

export const getUsers = async () => {
    return fetchRequest("/users")
}