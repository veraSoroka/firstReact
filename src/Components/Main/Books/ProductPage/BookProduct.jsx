import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import "./BookProduct.css"
import {useParams} from "react-router-dom";
import moreBooks1 from "../../Img/СМК.jpg"
import moreBooks2 from "../../Img/25.jpg"
import moreBooks3 from "../../Img/Сборник 17 oblozhka 303х210.jpg"
import moreBooks4 from "../../Img/21.jpg"
import moreBooks5 from "../../Img/18 .jpg"
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, deleteFavorite, deleteItemFromCart, setItemInCart} from "../../../Redux/Cart/Reducer";
import removeFromCart from "../../Img/cart_full.png";
import addToCart from "../../Img/cart_empty.png";
import addFavoriteActive from "../../Img/heart_active.png";
import addFavoriteItem from "../../Img/heart.png";

export const BookProduct = (props) => {

    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.itemsInCart);

    const likes = useSelector(state => state.cart.itemsWithLike);

    function isItemInCart(itemId) {
        return items.some(itemInCart => itemInCart.id === itemId);
    }

    function isItemLiked(likeId) {
        return likes.some(likedItem => likedItem.id === likeId);
    }

    let [product, SetProduct] = useState([])
    let {productId} = useParams()
    useEffect( () => {
        SetProduct(props.data[productId])
    }, [])

    return (
        <section className="book-product">
            <div className="about-block">
                <div className="left-block">
                    <img src={product.image} className="book-product-img"/>
                </div>
                <div className="right-block">
                    <h2>{product.title}</h2>
                    <p>Цена: {product.price}$</p>
                    <p>Автор: {product.authors}</p>
                    <p>{product.description}</p>
                    <p>{product.description2}</p>
                    <p>Количество страниц: {product.pageNum}</p>
                    <p>{product.moreInfo}</p>
                    <div className="right-block-product-add">
                        <div onClick={() => isItemInCart(product.id) ? dispatch(deleteItemFromCart(product.id)) : dispatch(setItemInCart(product))}>
                            {isItemInCart(product.id) ? <img src={removeFromCart} className="product-img-heart"/> : <img src={addToCart} className="product-img-heart"/>}
                        </div>
                        <div onClick={() => isItemLiked(product.id) ? dispatch(deleteFavorite(product.id)) : dispatch(addFavorite(product))}>
                            {isItemLiked(product.id) ? <img src={addFavoriteActive} className="product-img-heart"/> : <img src={addFavoriteItem} className="product-img-heart"/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-block">
                <div className="random-block">И это вам тоже понравится</div>
                <div className="other-product">
                   <img src={moreBooks1} className="other-product-img"/>
                   <img src={moreBooks2} className="other-product-img"/>
                   <img src={moreBooks3} className="other-product-img"/>
                   <img src={moreBooks4} className="other-product-img"/>
                   <img src={moreBooks5} className="other-product-img"/>

                </div>
            </div>
        </section>
    )
}

export default BookProduct;









{/*{ProductPage()}*/}
