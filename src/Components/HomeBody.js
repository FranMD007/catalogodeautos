import React from "react";
import Carrusel from "./Carrusel";
import Barrafiltro from "./Barrafiltro";
import Products from "./Routes/Products/Products";

export default class HomeBody extends React.Component{
    render(){
        return(
            <div>
                <div className="row justify-content-center">
                <Carrusel/>
                </div>
                <div className='row'>
                    <div className='col-2'><Barrafiltro/></div>
                    <div className='col-10'><Products/></div>
                </div>
            </div>
        );
    }
}