import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie/es6";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.CookiesManager = new Cookies();
    this.generateCreateButton = this.generateCreateButton.bind(this);
    this.generateLogOutButton=this.generateLogOutButton.bind(this);
    this.generateLoginButton=this.generateLoginButton.bind(this);
  }

  generateCreateButton() {
    console.log(this.props.getCookie());
    if (this.props.getCookie()) {
      return (
        <li class="nav-item">
          <Link to="/Products/Create" class="nav-link" href="#">
            Create Products
          </Link>
          
        </li>
      );
    } else {
      return null;
    }
  }

  generateLogOutButton(){
    if(this.props.getCookie()){
      return(
        <li class="nav-item">
              <input
                type="button"
                class="btn btn-primary nav-link"
                value="Cerrar Sesión &#128540;"
                onClick={this.props.LogOutFunction}
              />
            </li>
      );
    }
    else {
      return null;
    }
  }

  generateLoginButton(){
    if(!(this.props.getCookie())){
      return(
        <li class="nav-item">
        <button
          type="button"
          class="btn btn-primary nav-link"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          {" "}
          Iniciar Sesión &#128516;
        </button>
      </li>
      );
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <img
            src="https://www.pikpng.com/pngl/b/375-3752649_car-icon-cartoon-carros-todo-terreno-animados-clipart.png"
            alt=""
            width="75"
            height="75"
          />
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Products" class="nav-link" href="#">
                Products
              </Link>
            </li>
            {this.generateCreateButton()}

            <li class="nav-item">
              <Link to="/About" class="nav-link" href="#">
                About
              </Link>
            </li>
            {this.generateLoginButton()}
            {this.generateLogOutButton()}
          </ul>
        </div>
      </nav>
    );
  }
}
