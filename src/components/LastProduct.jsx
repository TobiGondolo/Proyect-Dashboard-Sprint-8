import React from "react";


export const LastProduct = (props) => {
    return (

        <div className="col-lg-6 mb-4" >
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last product in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        {/* {props.imagen} */}
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={"http://localhost:3000/img/products/" + props.imagen} alt="image dummy" /> 
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
