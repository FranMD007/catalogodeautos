import React from "react";
import {Outlet} from 'react-router'

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