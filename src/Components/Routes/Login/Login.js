import axios from 'axios';
import React, { Component } from 'react'; 
import { appHost } from '../../../appConfig'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            usuario: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }
    uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] && 15 >> c / 4).toString(16)
        );
      }
    async handleLoginClick(){
        if(this.state.usuario.length < 4){
            alert("El nombre de usuario debe tener al menos 4 caracteres");
            return;
        }
        if(this.state.password.length < 4){
            alert("La contraseña debe tener al menos 4 caracteres.");
            return;
        }
        //Validacion de credenciales
        let isValid = false;
        let username = "";
        let response = await axios.post(appHost + 'login', {
            username : this.state.usuario,
            password : this.state.password
        }); 
        isValid = response.data.length === 1;
        let token = '';
        //Sacar aviso 
        if(isValid){
            alert("Login exitoso");
            token = this.uuidv4();
            username = response.data[0].username;
        }else{
            alert("Hay algun error con el usuario y/o contraseña.");
        }
    //Actualizar el estado de la app
    this.props.functionToUpdateLoginState(isValid,username,token);    
    }

    async handleChange(e){
        if(e.target.name === "username"){
            await this.setState({
                usuario: e.target.value
            });
        }else{
            await this.setState({
                password: e.target.value
            });
        }
        console.log(this.state);    
    }
        

    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Log in</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className= "loginform">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={this.handleChange}/>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                    <input type="button" className="btn btn-primary" value="Login" aria-label="Close" data-bs-dismiss="modal" onClick = {this.handleLoginClick} />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
