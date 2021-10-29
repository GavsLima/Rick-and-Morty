import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RickAndMorty from "./View/RickAndMorty";
import Nav from "./components/Nav";
import Home from "./View/Home";

const Routes: React.FC = () => {
    return (

        <BrowserRouter>
            <Nav />
            <Switch>
                <Route  exact path='/' component={Home} />
                <Route path='/ram' component={RickAndMorty} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

