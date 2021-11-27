import React from "react";
import {Outlet} from 'react-router'
import '../../../Styles/products.css'

export default class ProductWraper extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    ProductWraper
                </h2>
                <Outlet/>
            </div>
        );
    }
}