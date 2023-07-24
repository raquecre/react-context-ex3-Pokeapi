import { Link } from "react-router-dom"

const NavBar = () => {
    
    const imgLogoPokemon = "https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"

    return (
        <div className=' 
        bg-red-600
        d-flex items-center justify-around '>
            <>
                <img alt="" width="35%" height="auto" src={imgLogoPokemon} />
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