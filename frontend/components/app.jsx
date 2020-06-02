import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './navbar/navbar_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <Switch>
    <AuthRoute exact path='/signup' component={SignUpContainer} />

    
    </Switch>


  </div>
)

export default App;
