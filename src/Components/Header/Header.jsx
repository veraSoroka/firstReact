import React, {useEffect, useState} from "react";
import logo from "./Img/logo.png";
import cartImg from "./Img/cart2.png"
import "./Header.css";
import {NavLink} from "react-router-dom";
import Login from "../Login/Login";
import {useSelector} from "react-redux";
import {CartPage} from "../CartPage/CartPage";



import {setItemInCart} from "../Redux/Cart/Reducer";

const Header = (props) => {
    const [modalActive, setModalActive] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, item) => acc += parseInt(item.price), 0)

    return (
        <header className="header">
            <img src={logo} className="logo-header" alt="Kraft magazine"/>
            <Login active={modalActive} setActive={setModalActive}/>
            <nav>
                <NavLink to="/home">{props.data.link1}</NavLink>
                <NavLink to="/about">{props.data.link2}</NavLink>
                <NavLink to="/home">{props.data.link3}</NavLink>
                <NavLink to="/about">{props.data.link4}</NavLink>
                <NavLink to="/home">{props.data.link5}</NavLink>
                <NavLink to="/about">{props.data.link6}</NavLink>
            </nav>
            <div className="login" onClick={()=> setModalActive(true)}>
                Login
            </div>
            <div className="cart-menu">
                <div className="cart">
                    <nav>
                        <NavLink to="/cart"><img src={cartImg} className="cart-img"/></NavLink>
                    </nav>
                    <div className="counter">{items.length}</div>
                </div>
                <div className="total-price">
                    {/*{totalPrice}*/}
                </div>

            </div>
        </header>


    )
}

export default Header;