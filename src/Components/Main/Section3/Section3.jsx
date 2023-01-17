import React from "react";
import "./Section3.css"
import book1 from "../Img/images.jpg";
import book2 from "../Img/images (1).jpg";
import book3 from "../Img/images (2).jpg";
import book4 from "../Img/images (2).jpg";

function Section3 () {
    return (
        <section>
            Book1
            <img src={book1} alt="one"/>
            Book2
            <img src={book2} alt="two"/>
            Book3
            <img src={book3} alt="three"/>
            Book4
            <img src={book4} alt="four"/>
        </section>
    )
}

export default Section3;