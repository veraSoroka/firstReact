import "./CartPage.css";
import React, {useEffect, useState} from "react";
import imgBox from "../Main/Img/box.png"
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../Redux/Cart/Reducer";
import removeFromCart from "../Main/Img/cart_full.png";
import addToCart from "../Main/Img/cart_empty.png";


const CartPage = (onClick) => {
    const items = useSelector(state => state.cart.itemsInCart);

    const dispatch = useDispatch();

    let [count, setCount] = useState (1);
    if (count < 1) {
        count = 1;
    }

    let totalPrice = items.reduce((acc, item) => acc += parseInt(item.price), 0);
    if (count > 0) {
        totalPrice = totalPrice*count;
    }


    return (

        <div className="cart-page">

            <div className="cart-page-product-list">
                {
                    items.length > 0 ? items.map(item =>
                            <div className="cart-page-wrapper">
                                    <img src={item.image} className="cart-page-img"/>
                                    <div className="cart-page-title">{item.title}</div>
                                    <div className="cart-page-count">
                                        <div onClick={() =>{setCount(count - 1)}}>-</div>
                                        <div>{count}</div>
                                        <div onClick={() =>{setCount(count + 1)}}>+</div>
                                    </div>

                                    <div className="cart-page-price">{item.price}$</div>
                                    <button  onClick={() => dispatch(deleteItemFromCart(item.id)) } className="cart-page-price">Delete from cart</button>
                            </div>
                        )

                        : <img src={imgBox} className="empty-cart"/>

                }
            </div>
            {
                items.length > 0 ?
                    <div className="cart-menu-arrange">
                        <div className="cart-menu-total-price">
                            <p>Total price: {totalPrice}$</p>
                        </div>
                        <button onClick={onClick} className="cart-menu-button">
                            Оформить заказ
                        </button>
                    </div>
                    : null
            }


        </div>
    )
}

export default CartPage;

