import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./components/LandingPage.jsx"
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes.js';

ReactDOM.render(
    <Router >
        <Routes className="routes-root"/>
    </Router>,
    document.querySelector("#root")
);