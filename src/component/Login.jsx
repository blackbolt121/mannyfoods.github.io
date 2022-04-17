import { Component } from "react";
import Nav from "./NavBar";
import "../styles/Login.css"
export default class Login extends Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            action: "/",
            status: ""
        }
    }
    handleSubmit(e){
        e.preventDefault();
        let response = window.confirm("Deseas continuar?");
        this.setState({status:""})
        if(response){
            this.setState({status:"Password o correo electronico invalido"})
        }else{
            
        }
    }
    render() {
        
        return (
             <>
             <Nav routes={{"Home":"/","Acerca":"/acerca","Registrar":"/register"}}/>
                <div>

                    <div id="login" className="container__login">
                        <img src="https://www.kindpng.com/picc/m/192-1925162_login-icon-png-transparent-png.png" alt="" />
                        <p>{this.state.status}</p>
                        <label htmlFor="email">Email</label>
                        <input name="email" id="email" type="email" placeholder="email@example.com"/>
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" type="password" placeholder="tu password"/>
                        <input type="submit" value="Login" className="button" onClick={this.handleSubmit}/>
                    </div>
                    
                </div>
             </>
             
        );
    }
}