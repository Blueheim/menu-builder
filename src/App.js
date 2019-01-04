import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuBuilderView from './views/MenuBuilder/MenuBuilderView';
import logo from './assets/burger.png';

import {
  AppLayout,
  HeaderLayout,
  Nav,
  NavLogo,
  NavActions,
  NavAction,
  NavLink,
  Image,
  FooterLayout,
} from 'nostromo-react';
// import nostromo overrides
import './sass/nostromo.config.scss';

import './App.css';

class App extends Component {
  render() {
    return (
      <AppLayout full config="9">
        <HeaderLayout primary className="App-header">
          <Nav>
            <NavLogo title="Menu maker">
              <Image className="logo" src={logo} alt="logo" />
              My menu maker
            </NavLogo>
            <NavActions>
              <NavAction>
                <NavLink href="/">New menu</NavLink>
              </NavAction>
            </NavActions>
          </Nav>
        </HeaderLayout>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} /> */}
            <Route path="/" exact component={MenuBuilderView} />
          </Switch>
        </BrowserRouter>
        <FooterLayout tertiary className="App-footer">
          DEROEUX Xavier - &#9400; { new Date(Date.now()).getFullYear() }
        </FooterLayout>
      </AppLayout>
    );
  }
}

export default App;
