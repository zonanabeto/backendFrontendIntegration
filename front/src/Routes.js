import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginPage, HomePage} from './components'; 

export const Routes = () => {
    return(
        <Switch>
            <Route path="/login" component={LoginPage} /> 
            <Route exact path="/" component={HomePage} />
        </Switch>
    );
}