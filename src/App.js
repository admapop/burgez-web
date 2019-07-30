import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu.jsx'
import "./App.scss";
import '../node_modules/react-responsive-carousel/lib/styles/carousel.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Navbar/>

    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/menu" component={Menu} />
    </Switch>
    </div>
  );
}

export default App;
