import React from 'react'
import "../styles/components/spinner.css"

export const Spinner = (props) => {
    return (
        <>
            <div class="spinner dark">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            {props.mensaje}
        </>
    )
}
