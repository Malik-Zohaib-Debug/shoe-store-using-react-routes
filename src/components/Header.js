import React, {useState, useContext, createRef} from "react";
import Menu from './svg/bars-solid.svg';
import Close from './svg/xmark-solid.svg';
import CartIcon from './svg/cart-shopping-solid.svg';
import { Link } from "react-router-dom";
import { GlobalContext } from "./GlobalState/GlobalContext";
import './css/Header.css';

const Header = () => {

    const {cart} = useContext(GlobalContext);

    const [toggle, setToggle] = useState(false);

    const menuToggle = () => {
        setToggle(!toggle);
    }


    return(
        <header>
            <div className="menu" onClick={menuToggle}>
                <img src={Menu} alt="menu" width={20}/>
            </div>
            <div className="logo">
                <h1><Link to="/">Nike</Link></h1>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login/Register</Link></li>
                    <li className="close" onClick={menuToggle}><img src={Close} alt="close" /></li>
                </ul>
                <div className="nav-cart">
                    <span>{cart.length}</span>
                    <Link to="/cart"><img src={CartIcon} alt="cart" width="20"/></Link>
                </div>
            </nav>

        </header>
    );
}

export default Header;

