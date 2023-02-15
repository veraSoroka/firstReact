import React, {useEffect, useState} from "react";
import addFavoriteItem from "../Img/heart.png";
import addFavoriteActive from "../Img/heart_active.png";
import addToCart from "../Img/cart_empty.png";
import removeFromCart from "../Img/cart_full.png";
import "./Books.css";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart, addFavorite, deleteFavorite} from "../../Redux/Cart/Reducer";



export const Books = (props) => {

    const navigate = useNavigate();
    const showProduct = (id) => {
        navigate(`/book-product/${id}`)
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
                <div className="book-title">BOOKS</div>
                <section className="Book"> {
                        props.name.map(bk =>
                            <div className="book-wrapper">
                                <img src={bk.image} className="book-img" alt="one"/>
                                <div className="buy-info">
                                    <div className="buy-info-left">
                                        <div>{bk.title}</div>
                                        <div className="price">{bk.price}$</div>
                                        <div className="more-book" onClick={() => {showProduct(bk.id)}}>
                                            More info
                                        </div>
                                    </div>
                                    <div className="buy-info-right">
                                        <div onClick={() => isItemLiked(bk.id) ? dispatch(deleteFavorite(bk.id)) : dispatch(addFavorite(bk))}>
                                            {isItemLiked(bk.id) ? <img src={addFavoriteActive} className="img-heart"/> : <img src={addFavoriteItem} className="img-heart"/>}
                                        </div>
                                        <div onClick={() => isItemInCart(bk.id) ? dispatch(deleteItemFromCart(bk.id)) : dispatch(setItemInCart(bk))}>
                                            {isItemInCart(bk.id) ? <img src={removeFromCart} className="img-heart"/> : <img src={addToCart} className="img-heart"/>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                }
                </section>
                <div className="view-more">view more books >>></div>
            </div>
        )
}

export default Books;







