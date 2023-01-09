import React, { useEffect } from 'react'

export const CategoriesDetail = (props) => {
    useEffect(() => {
        console.log("props", props)
    }, [])

    return (
        <div className="col-lg-6 mb-4" >
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{props.title.toUpperCase()}</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {props.categories.map(categoria => <div className="col-lg-6 mb-4">
                            <div className="card bg-info text-white shadow">
                                <div className="card-body">
                                    <span className="font-weight-bold">{categoria.nombre} </span> ({categoria.cantidadProductos} productos)
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
