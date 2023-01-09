import React, { useEffect, useState } from "react";

import "../styles/components/mainDashboard.css"

import { getCategorias } from "../service/categorias";
import { getLastProduct, getProductos } from "../service/productos";
import { getUsers } from "../service/usuarios";
import { fetchRequest } from "../utils/request";
import { CategoriesDetail } from "./CategoriesDetail";
import { DetailCard } from "./DetailCard";
import { LastProduct } from "./LastProduct";
import { Spinner } from "./Spinner";


export const MainDashboard = () => {
    const [loading, setLoading] = useState(true);

    const [usuariosTotales, setUsuariosTotales] = useState();
    const [productsInDb, setProductsInDb] = useState();
    const [amountInProducts, setAmaountInProducts] = useState();
    const [lastProduct, setLastProduct] = useState();
    const [arrCategories, setArrCategories] = useState();

    const loadScreen = async function () {
        const arrUsersPromise = getUsers()
        const arrProductosPromise = getProductos()
        const lastProduct = getLastProduct()
        const arrCategoriesPromise = getCategorias();

        setLoading(true)
        const arrPromises = await Promise.all([arrUsersPromise, arrProductosPromise, lastProduct, arrCategoriesPromise])
        setLoading(false)

        setUsuariosTotales(arrPromises[0].count)
        setProductsInDb(arrPromises[1].count)

        let sumatoria = 0;
        arrPromises[1].products.forEach(producto => {
            sumatoria = sumatoria + Number(producto.precio);
        });

        setAmaountInProducts(sumatoria)
        setLastProduct(arrPromises[2].data);
        setArrCategories(arrPromises[3].data)
    }

    useEffect(function () {
        loadScreen()
    }, [])

    return (
        <div className="flex-grow-1">
            <div className="container-fluid flex-grow-1">
                <div className="d-sm-flex align-items-center justify-content-between mb-4" >
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {!loading ?
                    <div className="row show-opacity" >
                        <DetailCard
                            type="azul"
                            title="PRODUCTS IN DATABASE"
                            number={productsInDb}
                        />

                        <DetailCard
                            type="verde"
                            title="AMOUNT IN PRODUCTS"
                            number={"$" + amountInProducts}
                        />

                        <DetailCard
                            type="amarillo"
                            title="USERS QUANTITY"
                            number={usuariosTotales}
                        />

                        <div className="row" >
                            <LastProduct
                                title={"Last product in Data Base"}
                                nombre={lastProduct?.nombre}
                                categoria={lastProduct?.categorium.nombre}
                                genero={lastProduct?.genero.nombre}
                                marca={lastProduct?.marca.nombre}
                                imagen={lastProduct?.imagens[0].nombre}
                                precio={lastProduct?.precio}
                            />

                            <CategoriesDetail
                                title={"Categories in Data Base"}
                                categories={arrCategories}
                            />

                        </div>
                    </div>
                    :
                    <div className="mainDashboard-loading-container flex-grow-1">
                        <Spinner mensaje="Cargando metricas" />
                    </div>
                }
            </div>
        </div>
    )
}