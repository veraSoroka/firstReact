import React from "react";
import "./Main.css"
import Books from "./Books/Books";
import Magazines from "./Magazines/Magazines"
import Stuff from "./Stuff/Stuff";
import Slider from "../Slider/Slider";
import data from "../Data/data";



const Main = (props) => {
    return (
        <main className="main1">
            <Slider name={props.data}/>
            <div className="main">
                <Magazines name={props.data}/>
                <Books name={props.data.Books}/>
                <Stuff name={props.data.Stuff}/>
            </div>
        </main>

    )
}

export default Main;

