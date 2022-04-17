import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"
export default class Nav extends Component{

    constructor(props){
        super(props);
        this.handleHideMenu = this.handleHideMenu.bind(this);
        this.show = true;
        this.state = {
            navbar : "menu__navbar hide",
            active: true
        }
    }
    handleHideMenu(){
        if(this.state.active){
            this.setState({navbar:"menu__navbar",active:false})
        }else{
            this.setState({navbar:"menu__navbar hide",active:true})
        }
    }
    render(){
        let menu = Object.keys(this.props.routes).map(x=>{
            if(x === "Iniciar Sesion" || x === "Registrar"){
                return <Link key={`${this.props.routes[x]}`} to={`${this.props.routes[x]}`} className="login">{x}</Link>
            }else{
                return <Link key={`${this.props.routes[x]}`} to={`${this.props.routes[x]}`}>{x}</Link>
            }
            
        })
        return (
            <>
                <nav className="menu">
                    <i className="fa-solid fa-bars menu__icon" onClick={this.handleHideMenu}></i>      
                    <Link to="/"><img src="http://cdn.onlinewebfonts.com/svg/img_169015.png" alt="" /></Link>
                    <div className={this.state.navbar}>
                        {menu}
                    </div>
                    
                </nav>
            </>
        )
    }
}

Nav.defaultProps = {
    routes: {"Home":"/","Acerca":"/acerca","Iniciar Sesion":"/login"}
}