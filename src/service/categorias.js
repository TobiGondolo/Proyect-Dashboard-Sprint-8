import { fetchRequest } from "../utils/request"

export const getCategorias = async () => {
    return await fetchRequest("/categories")
}