import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Home from "pages/Home";
import LoginPage from "pages/Login.js";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact name="Le Pet Gato - Banho & Tosa" component={Home}/>
                <Route path="/servicos" exact name="Serviços" component={LoginPage}/>
            </Switch>
        </Router>
    );
}
