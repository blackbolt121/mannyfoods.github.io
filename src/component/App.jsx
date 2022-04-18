import { Component} from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Acerca from "./Acerca";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import Register from "./Register";
import Footer from "./Footer";
import Contacto from "./Contacto";
import "../styles/App.css"
export default class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/index.html" element={<Navigate to={"/"}/>}/>
                        <Route path="/acerca" caseSensitive={false} element={<Acerca/>}></Route>
                        <Route path="/login" caseSensitive={false} element={<Login/>}></Route>
                        <Route path="/register" caseSensitive={false} element={<Register/>}/>
                        <Route path="/contacto" caseSensitive={false} element={<Contacto/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </>
        );
    }
}