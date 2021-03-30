import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css'
import React, { Component, useState } from 'react'
import ReactDOM, { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import App from './components/App.js';



ReactDOM.render(
    <App />,
    document.getElementById('app')
);


