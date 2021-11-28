import React from "react";
import { Link } from "react-router-dom";
import{useParams} from 'react-router-dom';
import { db } from "../../../db";
import Estrella from "../../Icons/Estrella";

export default function Product() {
            let {idProducto}=useParams();
            return  <div className='containerProducts'>
                        <div className='productElement'>
                            <h3>{db[idProducto].productName}</h3>
                            <img src={db[idProducto].productImage} alt={db[idProducto].productName} className='productImage'/>
                            <img src={db[idProducto].shiny} alt={db[idProducto].productName} className='productImage'/>
                            <h5>Área: {db[idProducto].location}</h5>
                            <p className='rating: '>Rating{Array(db[idProducto].rating).fill(<Estrella/>)}</p>
                            <Link to='/Products'>
                                <button type="button" class="btn btn-outline-danger">Regresar</button>
                            </Link>
                        </div>
                    </div>          
}