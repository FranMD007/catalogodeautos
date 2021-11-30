import React, { Component } from 'react';
import { users } from '../../../db';


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
    handleLoginClick(){
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
        for(let key in users){
            if(users[key].username === this.state.usuario && users[key].password === this.state.password){
                isValid = true;
                username = users[key].username;
                break;
            }
        }
        //Sacar aviso 
        if(isValid){
            alert("Login exitoso");
        }else{
            alert("Hay algun error con el usuario y/o contraseña.");
        }
    
        //Actualizar el estado de la app
        this.props.functionToUpdateLoginState(isValid,username);
        
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
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Log in</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form className= "loginform">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" name="password" id="exampleInputPassword1" onChange={this.handleChange}/>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <input type="button" class="btn btn-primary" value="Login" onClick = {this.handleLoginClick} />
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
