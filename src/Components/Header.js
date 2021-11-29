import React from "react";
import {Link} from 'react-router-dom'

export default class Header extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-light bg-light"> 
                    <div class="container">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png" alt="" width="75" height="75"/>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Products' class="nav-link" href="#">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Products/Create' class="nav-link" href="#">Create Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/About' class="nav-link" href="#">About</Link>
                            </li>
                            <li class="nav-item" >
                                <button type="button" class="btn btn-primary nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">&#128516;</button>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}