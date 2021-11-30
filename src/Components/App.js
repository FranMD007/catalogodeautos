import React from "react";
import {Routes, Route} from 'react-router-dom'
import Header from "./Header";
import HomeBody from "./HomeBody"
import Footer from "./Footer";
import About from "./About";
import NotFound from "./NotFound";
import ProductWraper from "./Routes/Products/ProductWraper";
import Products from "./Routes/Products/Products";
import ProductCreate from "./Routes/Products/ProductCreate";
import Product from "./Routes/Products/Product";
import Login from "./Routes/Login/Login";
import Cookies from "universal-cookie/es6";

export default class App extends React.Component{
    constructor(props){
        super(props);
        let token = this.CookiesManager.get("loginToken");
        this.state= {
            logged: token != null,
            username: "",
        };
        this.CookiesManager = new Cookies();
        this.updateLoginStatus = this.updateLoginStatus.bind(this);
    }
    async updateLoginStatus(log, usuname){
        await this.setState({
            logged: log,
            username: usuname
        });
        if(log){
            this.CookiesManager.set('loginToken', '', {
                path: '/',
                maxAge: 10* 1000,
            });
        }
    }
    renderApp(){
        return( 
            <div className='header'>

                <Header/>
                <Login />

                <div className='bodyClass'>
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

                <Footer />

            </div>
        );
    }
    renderLogin(){
        return (
            <div className='headerLogin'>
                <Header/>
                <div className='bodyClass'>
                    <Login functionToUpdateLoginState = {this.updateLoginStatus} />
                </div>
                <Footer />
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