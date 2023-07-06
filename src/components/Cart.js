
/* import React, { useContext } from "react"
import { CartContext } from "./context" */
import React, { useContext, useState } from "react"

import { CartContext } from "./context/contextCart"

const Cart = () => {
    const { cartPokemon } = useContext(CartContext)

    console.log(cartPokemon);
    return (
        <div className="bg-primary">
            <h1 className="bg-warning rounded-pill" >POKECART</h1>

            {cartPokemon.map((pokemon) => {
                
                return(
                <div className="d-flex justify-content-evenly bg-gradient m-2 p-2 border rounded-pill ">
                    <h5>{pokemon.name}</h5>
                    <button className="btn btn-warning ">Delete Pokemon</button>
                </div>
                )

            })}

        </div>
    )

}

export default Cart