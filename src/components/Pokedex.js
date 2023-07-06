

import React, { useContext, useState } from "react"
//import { PokeContext } from "../context"
import axios from "axios";
import { CartContext } from "./context/contextCart"

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
const Pokedex = () => {

    const [pokemon, setPokemon] = useState([])

    /* const { addToCart } = useContext(CartContext) */

    const { cartPokemon, setCartPokemon, addToCart } = useContext(CartContext)

  

    React.useEffect(() => {
        axios.get(urlPokemon).then((response) => {
            setPokemon(response.data);
        })

    }, [])
    const resultPokemon = pokemon.results
    return (
        <div className=" bg-danger">
            <h1 className="bg-warning rounded-pill" >POKÉDEX</h1>
            {resultPokemon?.map((onePokemon, i) => {
                return (
                    <div className="border border-warning m-2 bg-gradient rounded-pill  d-flex flex-row align-items-center justify-content-evenly">
                        <h5 className="idPokemon">{i + 1}</h5>
                        <img className="imgPokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} />

                        <h5 className="namePokemon">{onePokemon.name}</h5>
                        <button className="btn btn-success" onClick={() => addToCart(onePokemon)} >Add to Cart</button>


                    </div>

                )

            })}
        </div>)
}

export default Pokedex