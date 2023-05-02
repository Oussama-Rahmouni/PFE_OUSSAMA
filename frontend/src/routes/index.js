import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import Contact from '../pages/Contact';
import EnterpriseContact from '../pages/EnterpriseContact';
import MostEnterprise from '../pages/MostEnterprise';
import EnterpriseForm from '../pages/EnterpriseForm';
import ProductForm from '../pages/ProductForm';
import Profile from '../pages/Profile';
import ProfileForm from '../pages/ProfileForm';

const Routes = () => (
  <Router>
    <Switch>
      
      <Route path="/home" exact render={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/enterprise/:name" exact component={EnterpriseContact} />
      <Route path="/enterprise/most/:name" exact component={MostEnterprise} />
      <Route path="/enterprise/form/:name" exact component={EnterpriseForm} />
      <Route path="/product/form/:name" exact component={ProductForm} />
      <Route path="/profile/:name" exact component={Profile} />
      <Route path="/profile/form/:name" exact component={ProfileForm} />
    </Switch>
  </Router>
);


export { Routes as default }