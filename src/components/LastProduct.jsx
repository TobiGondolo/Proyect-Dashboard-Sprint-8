import React, { useEffect } from "react";
import "../styles/components/lastProduct.css"

export const LastProduct = (props) => {

    return (

        <div className="col-lg-6 mb-4" >
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{props.title.toUpperCase()}</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={"http://localhost:3000/img/products/" + props.imagen} alt="image dummy" />
                    </div>
                    <div className="lastProduct-description-container">
                        <h1>{props.nombre}</h1>
                        <p><u>Categoria</u>: {props.categoria}</p>
                        <p><u>Marca</u>: {props.marca}</p>
                        <p><u>Genero</u>: {props.genero}</p>
                        <p><u>Precio</u>: {props.precio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
