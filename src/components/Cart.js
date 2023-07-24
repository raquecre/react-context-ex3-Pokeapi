
/* import React, { useContext } from "react"
import { CartContext } from "./context" */
import React, { useContext, } from "react"

import { CartContext } from "./context/contextCart"

const Cart = () => {
    const { cartPokemon, deleteToCart } = useContext(CartContext)

    console.log(cartPokemon);
    return (
        <div className="bg-cover bg-[url(https://cdn.dribbble.com/users/177498/screenshots/2663047/media/9bdd57f62f770e223f0af56425d17a0d.jpg)]">
            <h1 className="p-2  text-yellow-300 bg-gray-950 bg-opacity-80 rounded-pill" >POKECART</h1>

            {cartPokemon.map((pokemon) => {

                return (
                    <div className=" bg-yellow-500 bg-opacity-70 m-2  rounded-pill  d-flex flex-row align-items-center justify-content-evenly">
                        <h5>{pokemon.id + 1}</h5>
                        <img alt="" src={pokemon.img} ></img>
                        <h5>{pokemon.name}</h5>
                        <button className="btn btn-warning" onClick={() => deleteToCart(pokemon)} >Delete Pokemon</button>
                    </div>
                )

            })}

        </div>
    )

}

export default Cart