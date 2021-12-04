import React from "react";
import Carrusel from "./Carrusel";
import Barrafiltro from "./Barrafiltro";
import Products from "./Routes/Products/Products";

export default class HomeBody extends React.Component{
    render(){
        return(
            <div>
                <div class="row justify-content-center">
                <Carrusel/>
                </div>
                <div class='row'>
                    <div class='col-3'><Barrafiltro/></div>
                    <div class='col-9'><Products/></div>
                </div>
            </div>
        );
    }
}