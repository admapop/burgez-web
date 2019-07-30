import React from 'react';
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
import "./App.scss";

setDefaultBreakpoints([
  { mobile: 0 },
  { tablet: 700 }, //need to play around a bit, previous was 740 but did not work as expected with Galaxy S9
  { desktop: 1024 }
])

function App() {
  return (
    <div className="App" style={{position:"fixed"}}>
      <BreakpointProvider>
      <Logo/>
      <Navbar/>

    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/story" component={Story} />
      <Route exact path="/locations" component={Locations} />

    </Switch>
      <Social/>
    </BreakpointProvider>
    </div>
  );
}

export default App;
