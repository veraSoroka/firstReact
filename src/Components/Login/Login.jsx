import React from "react";
import "./Login.css"

const Login = ({active, setActive, children}) => {
    return (
    <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
        <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
            {children}
            <div className="login-wrapper">
                <p>Hello, stranger</p>
                <label>email</label>
                <input type="email" name="auth_email" placeholder="email" required/>
                    <label>password</label>
                <input type="password" name="auth_pass" placeholder="password" required/>
                <button className="form_auth_button" type="submit" name="form_auth_submit">Continue</button>
            </div>

        </div>
        {/*<form action="">*/}
        {/*    <input type="text"/>*/}
        {/*    <input type="text"/>*/}
        {/*    <input type="text"/>*/}
        {/*    <button>Submit</button>*/}
        {/*</form>*/}
    </div>
    );
};

export default Login;