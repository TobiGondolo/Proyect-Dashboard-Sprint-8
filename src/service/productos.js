import { fetchRequest } from "../utils/request"

export const getLastProduct = async () => {
    return await fetchRequest("/products/lastProduct")
}

export const getProductos = async () => {
    return await fetchRequest("/products")
}