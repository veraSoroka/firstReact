import React, {useEffect, useState} from "react";
import addFavoriteItem from "../Img/heart.png";
import addFavoriteActive from "../Img/heart_active.png";
import addToCart from "../Img/cart_empty.png";
import removeFromCart from "../Img/cart_full.png";
import "./Stuff.css"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart, addFavorite, deleteFavorite} from "../../Redux/Cart/Reducer";


export const Stuff = (props) => {

    const navigate = useNavigate();
    const showProduct = (id) => {
        navigate(`/stuff-product/${id}`)
    }

    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);

    const likes = useSelector(state => state.cart.itemsWithLike);

    function isItemInCart(itemId) {
        return items.some(itemInCart => itemInCart.id === itemId);
    }

    function isItemLiked(likeId) {
        return likes.some(likedItem => likedItem.id === likeId);
    }

    return (
        <div>
            <div className="stuff-title">STUFF</div>
            <section className="Stuff"> {
                props.name.map(st =>
                    <div className="stuff-wrapper">
                        <img src={st.image} className="stuff-img" alt="one"/>
                        <div className="buy-info">
                            <div className="buy-info-left">
                                <div>{st.title}</div>
                                <div className="price">{st.price}$</div>
                                <div className="more-book" onClick={() => {showProduct(st.id)}}>
                                    More info
                                </div>
                        </div>
                        <div className="buy-info-right">
                            <div onClick={() => isItemLiked(st.id) ? dispatch(deleteFavorite(st.id)) : dispatch(addFavorite(st))}>
                                {isItemLiked(st.id) ? <img src={addFavoriteActive} className="img-heart"/> : <img src={addFavoriteItem} className="img-heart"/>}
                            </div>
                            <div onClick={() => isItemInCart(st.id) ? dispatch(deleteItemFromCart(st.id)) : dispatch(setItemInCart(st))}>
                                {isItemInCart(st.id) ? <img src={removeFromCart} className="img-heart"/> : <img src={addToCart} className="img-heart"/>}
                            </div>
                        </div>
                    </div>

                </div>
                )
            }
            </section>
            {/*<div className="stuff-gif"><img src={stuffGif}/>*/}
            {/*    <button>Слушать выпуски</button>*/}
            {/*</div>*/}
            <div className="view-more">view more books >>></div>
        </div>
    )
}

export default Stuff;