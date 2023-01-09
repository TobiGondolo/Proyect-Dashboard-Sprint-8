import React, { useEffect, useState } from "react";
import imagenDummy from '../assets/images/product_dummy.svg'
import { getProductos } from "../service/productos";
import { getUsers } from "../service/usuarios";
import { fetchRequest } from "../utils/request";
import { DetailCard } from "./DetailCard";


export const MainDashboard = () => {
    const [usuariosTotales, setUsuariosTotales] = useState();
    const [productsInDb, setProductsInDb] = useState();
    const [amountInProducts, setAmaountInProducts] = useState();
    const loadScreen = async function(){
    const respuesta = await getUsers()
    console.log(respuesta);
    setUsuariosTotales(respuesta.count)
    const respuesta2 = await getProductos()
    console.log(respuesta2);
    setProductsInDb(respuesta2.count)    
    }
    useEffect(function(){
        loadScreen()
    },[])


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
                    <DetailCard type= "azul" title="PRODUCTS IN DATABASE" number= {productsInDb}/>
                    <DetailCard type= "verde" title="AMOUNT IN PRODUCTS" number= {usuariosTotales}/>
                    <DetailCard type= "amarillo" title="USERS QUANTITY" number= {usuariosTotales}/>


                {/* <!-- Content Row --> */}
                <div className="row" >
                    {/* <!-- Last Product in DB --> */}
                    <div className="col-lg-6 mb-4" >
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={imagenDummy} alt="image dummy" />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                                <a target="_blank" rel="nofollow" href="/">View product detail</a>
                            </div>
                        </div>
                    </div>

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