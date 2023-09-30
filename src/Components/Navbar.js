import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="left">
              <h3>Shopping Cart</h3>
            </div>

            <div className="right">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </div>
           
        </div>
    )
}

export default Navbar;