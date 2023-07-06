import { Link } from "react-router-dom"

const NavBar = () => {
    const imgLogoPokemon = "https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"

    return (
        <div className=" d-flex d-flex justify-content-around p-3 bg-danger">
            <img width="20%" height="auto" src={imgLogoPokemon} />
            <ul className="d-flex btn-group ">

                <button type="button" className="btn btn-warning ">
                    <Link to="/" >POKEDEX</Link>
                </button>

                <button  className="btn btn-dark">
                    <Link to="/cart" >CART</Link>
                </button>

            </ul>

        </div>
    )
}

export default NavBar