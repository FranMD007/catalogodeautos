import React from "react";
import {db} from '../../../db'

export default class Products extends React.Component{
    render(){
        let id=137;
        let obj=db[id];

        return(
            <div className='containerProducts'>
                {
                    Object.entries(db).map(function(v){
                        return(
                            <div className='productElement'>
                                <h3>{v[1].productName}</h3>
                                <img src={v[1].productImage} alt={obj.productName} className='productImage'/>
                                 <p className='rating'>Rating{Array(v[1].rating).fill('*')}</p>
                            </div>
                        );
                })}
            </div>
        );
    }
}