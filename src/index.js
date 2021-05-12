import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import {Provider} from 'react-redux';

Modal.setAppElement("#root");

ReactDOM.render(<Provider><App/></Provider>, document.getElementById("root"));
