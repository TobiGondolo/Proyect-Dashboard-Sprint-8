import React, { useEffect, useState } from "react";
import { getLastProduct, getProductos } from "../service/productos";
import { getUsers } from "../service/usuarios";
import { fetchRequest } from "../utils/request";
import { DetailCard } from "./DetailCard";
import { LastProduct } from "./LastProduct";


export const MainDashboard = () => {
    const [usuariosTotales, setUsuariosTotales] = useState();
    const [productsInDb, setProductsInDb] = useState();
    const [amountInProducts, setAmaountInProducts] = useState();
    const [lastProduct, setLastProduct] = useState();
    const loadScreen = async function () {
        const respuesta = await getUsers()
        console.log(respuesta);
        setUsuariosTotales(respuesta.count)
        const respuesta2 = await getProductos()
        console.log(respuesta2);
        setProductsInDb(respuesta2.count)
        let sumatoria = 0;
        respuesta2.products.forEach(producto => {
            sumatoria = sumatoria + Number(producto.precio);
        });
        setAmaountInProducts(sumatoria)
        const respuesta3 = await getLastProduct()
        console.log(respuesta3);
        setLastProduct(respuesta3.data);
    }
    useEffect(function () {
        loadScreen()
    }, [])


    return (
        <div>
            <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4" >
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row" >

                    {/* <!-- Amount of Products in DB --> */}
                    <DetailCard type="azul" title="PRODUCTS IN DATABASE" number={productsInDb} />
                    <DetailCard type="verde" title="AMOUNT IN PRODUCTS" number={"$" + amountInProducts} />
                    <DetailCard type="amarillo" title="USERS QUANTITY" number={usuariosTotales} />


                    {/* <!-- Content Row --> */}
                    <div className="row" >
                        <LastProduct description={lastProduct?.nombre} imagen={lastProduct?.imagens[0].nombre} />

                        {/* <!-- Categories in DB --> */}
                        <div className="col-lg-6 mb-4" >
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-info text-white shadow">
                                                <div className="card-body">
                                                    Category 01
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-info text-white shadow">
                                                <div className="card-body">
                                                    Category 02
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-info text-white shadow">
                                                <div className="card-body">
                                                    Category 03
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-info text-white shadow">
                                                <div className="card-body">
                                                    Category 04
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-info text-white shadow">
                                                <div className="card-body">
                                                    Category 05
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-info text-white shadow">
                                                <div className="card-body">
                                                    Category 06
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- /.container-fluid --> */}
                </div>
                {/* <!-- End of Main Content --> */}
            </div>
        </div>
    )
}