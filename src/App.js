import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MenuBuilderView from './views/MenuBuilder/MenuBuilderView';
import logo from './logo.svg';

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
            <NavLogo title="Nostromo">
              <Image className="logo" src={logo} alt="logo" />
            </NavLogo>
            <NavActions>
              <NavAction>
                <NavLink href="/">Nouveau</NavLink>
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
          Footer
        </FooterLayout>
      </AppLayout>
    );
  }
}

export default App;
