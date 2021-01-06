import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Error404 from './pages/Error404';

import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import Movie from './pages/Movie';
import Logout from './pages/Logout';

import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute restricted={true} exact path="/" name="Login" component={Login} />
            <PublicRoute restricted={true} exact path="/register" name="Register" component={Register} />

            <PrivateRoute path="/dashboard" name="Dashboard" component={Dashboard}/>
            <PrivateRoute path="/account" name="Account" component={Account}/>
            <PrivateRoute path="/movie" name="Movie" component={Movie}/>
            <PrivateRoute path="/favorites" name="Favorites" component={Favorites}/>
            <PrivateRoute path="/logout" name="Logout" component={Logout}/>
                
            <Route path="*" name="Error404" component={Error404} />
        </Switch>
    </BrowserRouter>
);

export default Routes;