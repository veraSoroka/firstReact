import React from "react";
import "./Footer.css"


const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div>Издательство «Крафтовая литература» editor@kraftlit.com</div>
                <div>EMAIL РЕДАКЦИИ «ЮМОР ЛЕЧИТ» yumorlechit@gmail.com</div>
                <div className="copyright">{props.data.name}</div>
            </div>
        </footer>
    )
}

export default Footer;