import React from "react";
import "./Magazine.css";
import addFavoriteItem from "../Img/heart.png";
import addFavoriteActive from "../Img/heart_active.png";
import addToCart from "../Img/cart_empty.png";
import removeFromCart from "../Img/cart_full.png";
import {NavLink} from "react-router-dom";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart, addFavorite, deleteFavorite} from "../../Redux/Cart/Reducer";


export const Magazines = (props) => {

    const navigate = useNavigate();
    const showProductMagazine = (id) => {
        navigate(`/magazine-product/${id}`)
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
            <div className="magazine-title">MAGAZINES</div>
            <section className="Magazine">
                {
                props.name.Magazines.map(mg =>
                    <div className="magazine-wrapper">
                        <img src={mg.image} className="magazine-img" alt="one"/>
                        <div className="buy-info">
                            <div className="buy-info-left">
                                <div>{mg.title}</div>
                                <div className="price">{mg.price}$</div>
                                <div className="more-book" onClick={() => {showProductMagazine(mg.id)}}>
                                    More info
                                </div>
                            </div>
                            <div className="buy-info-right">
                                <div onClick={() => isItemLiked(mg.id) ? dispatch(deleteFavorite(mg.id)) : dispatch(addFavorite(mg))}>
                                    {isItemLiked(mg.id) ? <img src={addFavoriteActive} className="img-heart"/> : <img src={addFavoriteItem} className="img-heart"/>}
                                </div>
                                <div onClick={() => isItemInCart(mg.id) ? dispatch(deleteItemFromCart(mg.id)) : dispatch(setItemInCart(mg))}>
                                    {isItemInCart(mg.id) ? <img src={removeFromCart} className="img-heart"/> : <img src={addToCart} className="img-heart"/>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </section>
            {/*<div className="mag-gif"><img src={magGif}/>*/}
            {/*    <button>Подписка на журнал</button>*/}
            {/*</div>*/}
            <div className="view-more">view more books >>></div>
        </div>
    )
}

export default Magazines;