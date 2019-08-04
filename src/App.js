import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo';
import { Route, Switch } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import { setDefaultBreakpoints } from 'react-socks';
import Main from './components/Main';
import Menu from './components/Menu.jsx';
import Story from './components/Story/Story';
import Social from './components/Social/Social';
import Locations from './components/Locations/Locations';
import Contact from './components/Forms/Contact';
import Proponici from './components/Forms/Proponici';
import Lavora from './components/Forms/Lavora';
import Sidebar from './components/Navbar/Sidebar';
import "./App.scss";

setDefaultBreakpoints([
  { mobile: 0 },
  { xlmobile: 360 },
  { tablet: 700 }, //need to play around a bit, previous was 740 but did not work as expected with Galaxy S9
  { desktop: 1024 }
])

class App extends Component {
  componentDidMount() {
    // const app = document.querySelector('.carousel');
    window.addEventListener("load", () => window.scrollBy(0, 10));
  }
  render() {
    return (
      <div className="App" style={{ position: "fixed" }} id="App">
        <BreakpointProvider>
          <Logo />
          <Navbar />
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} isOpen={false} />
          <div id="page-wrap">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/story" component={Story} />
              <Route exact path="/locations" component={Locations} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/proponici" component={Proponici} />
              <Route exact path="/lavora" component={Lavora} />
            </Switch>
            <Social />
          </div>
        </BreakpointProvider>
      </div>
    );
  }
}

export default App;
