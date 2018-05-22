import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/login.css'
import logo from '../assets/images/logo.png'
import $ from 'jquery'

import axios from 'axios'

class Login extends Component{
    constructor(...props){
        super(...props)
        this.state={
            email:"",
            password:"",
            loading : false
        }

        this.handleOnFocusInput= this.handleOnFocusInput.bind(this)
        this.handleOnShowFade= this.handleOnShowFade.bind(this)
        this.onChange = this.onChange.bind(this)
        this.login= this.login.bind(this)
    }

    
    handleOnFocusInput(e){
        $('#visibility').css('display', 'block')       
    }

    handleOnShowFade(e){
        let x = $(e.target).next().attr('type')
        if(x === 'password'){
            $('#visibility').text("visibility_on")
            $('#user-password').attr('type','text')
        }
        else if (x === 'text'){
            $('#visibility').text('visibility_off')
            $('#user-password').attr('type','password')
        }       
    }

    onChange(e){
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    login(e){
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(this.state.email);  

        return axios.post('http://206.189.175.34:8000/api/v1/auth/login', user)
        .then( response => {
            console.log(response)
            this.props.history.replace('/home')
        })
        .catch(
            err =>{
            console.log(err)
            alert("Datos incorrectos intentalo de nuevo !!")
            }
        )
        
    }
    render(){
        
        return(
            <div className="container">
                <div className="container-img box-width">
                    <img  className="logo" src={logo} alt="logo - Chasqui" title="Team Chasqui"/>
                </div>
                <div className="container-form box-width">        
                    <form action="" className="login-user" id="login-user">
                        <div className="error" id="form-error"></div>
                        <div className="form-input input-field">
                            <input 
                                type= "email"  
                                id= "user-username" 
                                name= "email" 
                                required
                                autoFocus
                                autoComplete= "off"
                                value= {this.state.email}
                                onChange= {this.onChange}
                                title= "Complete sus datos"
                                autoCorrect= "off"
                            />
                            <label htmlFor="user-username" className="label">Usuario</label>
                        </div>
                        <div className="form-input input-field">
                            <i id="visibility" className="material-icons visibility" onClick={this.handleOnShowFade}>visibility_off</i>
                            <input 
                                type= "password"  
                                id= "user-password" 
                                name= "password" 
                                required
                                onFocus= {this.handleOnFocusInput}
                                value= {this.state.password}
                                onChange= {this.onChange}
                                title= "Complete sus datos"
                            />
                            <label htmlFor="user-password" className="label">Contraseña</label>
                        </div>
                        <div className="form-redirect"> 
                            <Link to="/register">Si no tiene acceso, registrese!</Link>
                        </div>
                        <div className="form-input btn">
                            <input type="submit"  value="Ingresar"  onClick={this.login}/>                           
                        </div>                      
                    </form>
                </div>
            </div>
        )       
    }
} 

export default Login