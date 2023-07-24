

import React, { useContext, useState } from "react"
//import { PokeContext } from "../context"
import axios from "axios";
import { CartContext } from "./context/contextCart"

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
const Pokedex = () => {

    const [pokemon, setPokemon] = useState([])

    const { addToCart } = useContext(CartContext)

  

    React.useEffect(() => {
        axios.get(urlPokemon).then((response) => {
            setPokemon(response.data);
        })

    }, [])
    const resultPokemon = pokemon.results
    return (
        <div  className=' 
        bg-[url(https://cdn.dribbble.com/users/177498/screenshots/2663047/media/9bdd57f62f770e223f0af56425d17a0d.jpg)] bg-cover'>
           
            {/* <img src="https://wallpaperaccess.com/full/8611.jpg"/>
 */}            <h1 className=" p-2 bg-warning bg-opacity-95 rounded-pill" >POKÉDEX</h1>
            {resultPokemon?.map((onePokemon, i) => {
                return (
                    <div className=" bg-blue-600 bg-opacity-75 m-4 bg-y-200 rounded-pill  d-flex flex-row align-items-center justify-content-evenly">
                         <h5 className="idPokemon">{i + 1}</h5>
                        <img alt="" className="imgPokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} />

                        <h5 className="namePokemon">{onePokemon.name}</h5>
                        <button className="bg-opacity-95 text-white bg-gray-900 hover:bg-gray-800  font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2" onClick={() => addToCart({name:onePokemon.name, id:i, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`})} >Add to POKECART</button>


                    </div>

                )

            })}
        </div>)
}

export default Pokedex