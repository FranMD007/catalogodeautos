import React from "react";
import {Link} from 'react-router-dom'
import {db} from '../../../db'
import Estrella from "../../Icons/Estrella";

export default class Products extends React.Component{
    render(){
        return(
            <div className='containerProducts'>
                {
                    Object.entries(db).map(function(v){
                        return(
                            <Link to={'/Products/'+v[1].productId}>
                                <div className='productElement'>
                                    <h3>{v[1].productName}</h3>
                                    <img src={v[1].productImage} alt={v[1].productName} className='productImage'/>
                                    <p className='rating: '>Rating{Array(v[1].rating).fill(<Estrella/>)}</p>
                                </div>
                            </Link>
                        );
                })}
            </div>
        );
    }
}