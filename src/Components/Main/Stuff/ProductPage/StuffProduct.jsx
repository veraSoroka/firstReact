import React from "react";
import "./StuffProduct.css"
import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export const StuffProduct = (props) => {
    let [product, SetProduct] = useState([])
    let {productId} = useParams()
    useEffect( () => {
        SetProduct(props.data.filter(x => x.id === productId)[0]);
    }, [])
    console.log(props.data)

    return (

        <section className="book-product">
            <div className="about-block">
                <div className="left-block">
                    <img src={product.image} className="mag-product-img"/>
                </div>
                <div className="right-block">
                    {/*<h2>{product.title}</h2>*/}
                    {/*<p>Цена: {product.price}$</p>*/}
                    {/*<p>Автор: {product.authors}</p>*/}
                    {/*<p>{product.description}</p>*/}
                    {/*<p>{product.description2}</p>*/}
                    {/*<p>Количество страниц: {product.pageNum}</p>*/}
                    {/*<p>{product.moreInfo}</p>*/}
                </div>
            </div>
            <div className="footer-block">
                <div className="random-block">И это вам тоже понравится</div>
                <div className="other-product">

                </div>
            </div>
        </section>
    )
}

export default StuffProduct;