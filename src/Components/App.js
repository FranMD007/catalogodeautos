import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import HomeBody from "./HomeBody"
import About from "./About";
import NotFound from "./NotFound";
import ProductWraper from "./Routes/Products/ProductWraper";
import Products from "./Routes/Products/Products";
import ProductCreate from "./Routes/Products/ProductCreate";
import Product from "./Routes/Products/Product";
import Login from "./Routes/Products/Login/Login";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            logged: false,
            username: "",
        };
    }
    renderApp(){
        return( 
            <div className='header'>
            <nav>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/Products'>Products</Link> </li>
                    <li> <Link to='/Products/Create'>Create Products</Link> </li>
                    <li><Link to='/About'>About</Link></li>
                    <li>&#128516;</li>
                </ul>
            </nav>
            <div className='bodyClass'>
                Página xD
                <Routes>
                    <Route path='/' element={<HomeBody/>}/>
                    <Route path='/Products' element={<ProductWraper/>}>
                        <Route path='/Products' element={<Products/>} />
                        <Route path='/Products/:idProducto' element={<Product/>} />
                        <Route path='/Products/Create' element={<ProductCreate/>} />
                    </Route>
                    <Route path='/About' element={<About/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                
            </div>
            </div>
        );
    }
    renderLogin(){
        return (
            <div className='headerLogin'>
                <div className='bodyClass'>
                    <Login />
                </div>
                </div>
        );
    }
    render(){
      if(this.state.logged){
        return this.renderApp();
      }else{
          return this.renderLogin();
      }
    }
}