import React from 'react';
import { Switch,Route } from 'react-router-dom';
import login from './login'


const Main = () => (
    <Switch>
        <Route exact path="/login" component={login} />
    </Switch>
)
export default Main;