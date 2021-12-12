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
    if (this.props.getCookie()) {
      return (
        <li className="nav-item">
          <Link to="/Products/Create" className="nav-link" href="#">
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
        <li className="nav-item">
              <input
                type="button"
                className="btn btn-primary nav-link"
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
        <li className="nav-item">
        <button
          type="button"
          className="btn btn-primary nav-link"
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
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div>
            <span>
          <img
            src="https://www.pikpng.com/pngl/b/375-3752649_car-icon-cartoon-carros-todo-terreno-animados-clipart.png"
            alt=""
            width="75"
            height="75"
          />
          </span>
          <span className='Brand'>MyCarApp</span>
          </div>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/" className='nav-link active' aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-link" href="#">
                Products
              </Link>
            </li>
            {this.generateCreateButton()}

            <li className="nav-item">
              <Link to="/About" className="nav-link" href="#">
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
