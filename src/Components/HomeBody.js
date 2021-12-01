import React from "react";
import Carrusel from "./Carrusel";
import Barrafiltro from "./Barrafiltro";
import Products from "./Routes/Products/Products";

export default class HomeBody extends React.Component{
    render(){
        return(
            <div>
                <Carrusel/>
                <div class='row'>
                    <div class='col-2'><Barrafiltro/></div>
                    <div class='col-10'><Products/></div>
                </div>
            </div>
        );
    }
}