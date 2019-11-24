import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home'
import UserDashBoard from '../pages/dashBoard'
const Main = () => (

    <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/checkout' exact component={UserDashBoard} />
        </Switch>
    </Router>
)

export default Main;