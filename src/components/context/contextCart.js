import React, { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
	const [cartPokemon, setCartPokemon] = useState([])
	/*setCartPokemon({img: " ", id: "", name:""})  */

	const addToCart = (pokemon) => {
		
			setCartPokemon([...cartPokemon, pokemon])
		

		console.log(cartPokemon);
	}

	const deleteToCart = (pokemon) => {
		const newCart = cartPokemon.filter(pokemonFav => pokemonFav !== pokemon)

		setCartPokemon(newCart)
	}


	return (
		<CartContext.Provider value={{ addToCart, deleteToCart, cartPokemon, setCartPokemon }}>
			{children}
		</CartContext.Provider>
	)
}