import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import ReactDOM, { render } from 'react-dom';
import $ from 'jQuery';
import Popper from 'popper.js';
import Cte from './Cte.js';
import Tsa from './Tsa.js'
import Navigation from './Navigation.js';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div id="App">
                    <Navigation />

                    <Switch>
                        <Route path='/Tsa'>
                            <Tsa />
                        </Route>
                        <Route path='/Cte'>
                            <Cte />
                        </Route>
                        <Route path='/'>
                            <Tsa />
                        </Route>
                    </Switch>
                </div>

            </Router>

        );

    };
}

export default App;