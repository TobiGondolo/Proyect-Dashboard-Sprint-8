import { fetchRequest } from "../utils/request"

// const getProducto = (productoId) => {

// }


export const getProductos = async () => {
    return await fetchRequest("/products")
}