import { Link } from "react-router-dom"

const NavBar = () => {
    const imgPokemonfont = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d843okx-eb13e8e4-0fa4-4fa9-968a-e0f36ff168de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0M29reC1lYjEzZThlNC0wZmE0LTRmYTktOTY4YS1lMGYzNmZmMTY4ZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TIK_E5L8dTyBUk_dADA5WkLP8jSJMR7YGJG54KNAido"
    const imgLogoPokemon = "https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"

    return (
        <div className=' 
        bg-red-600
        d-flex items-center justify-around '>
            <>
                <img width="35%" height="auto" src={imgLogoPokemon} />
            </>

            <ul className="d-flex flex-col m- ">

                <button type="button" dir="ltr" className=" bg-opacity-95 rtext-white bg-yellow-400 hover:bg-yellow-500  font-medium rounded-full text-4xl px-5 py-2.5 text-center mr-2 mb-2 ">
                    <Link to="/" >POKEDEX</Link>
                </button>

                <button type="button" dir="rtl" className="bg-opacity-95 text-white bg-gray-900 hover:bg-gray-800  font-medium rounded-full text-4xl px-5 py-2.5 text-center  ">
                    <Link to="/cart" >POKECART</Link>
                </button>

            </ul>

        </div>
    )
}

export default NavBar