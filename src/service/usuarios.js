import { fetchRequest } from "../utils/request"

export const getUsers = async () => {
    return await fetchRequest("/users")
}