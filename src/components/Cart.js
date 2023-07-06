
/* import React, { useContext } from "react"
import { CartContext } from "./context" */
import React, { useContext, useState } from "react"

import { CartContext } from "./context/contextCart"

const Cart = () => {
    const { cartPokemon, deleteToCart } = useContext(CartContext)

    console.log(cartPokemon);
    return (
        <div className="bg-primary">
            <h1 className="bg-warning rounded-pill" >POKECART</h1>

            {cartPokemon.map((pokemon) => {

                return (
                    <div className="border border-warning m-2 bg-gradient rounded-pill  d-flex flex-row align-items-center justify-content-evenly">
                        <h5>{pokemon.id + 1}</h5>
                        <img src={pokemon.img} ></img>
                        <h5>{pokemon.name}</h5>
                        <button className="btn btn-warning" onClick={() => deleteToCart(pokemon)} >Delete Pokemon</button>
                    </div>
                )

            })}

        </div>
    )

}

export default Cart