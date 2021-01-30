/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');
// require('./components/sections/Navigation');
// require('./components/sections/Footer');
// require('./App.css');
// require('./pages/Index');
// require('./pages/About');
// require('./pages/Services');
// require('./pages/Contact');
// require('./pages/Projects');

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/sections/Navigation';
import Footer from './components/sections/Footer';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}
if (document.getElementById('root')) {
  ReactDOM.render(
    <App />,
  document.getElementById('root')
);
}
