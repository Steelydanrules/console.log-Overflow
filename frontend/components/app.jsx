import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import LogInContainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container'
import FooterContainer from './footer/footer_container'
import UserContainer from './user/user_container'
import { AuthRoute } from '../util/route_util';
import HomePageContainer from './homepage/homepage_container'

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>


    <Switch>
    <Route exact path="/" component={HomePageContainer} />
    <Route path='/users/:id' component={UserContainer} />
    <AuthRoute exact path='/signup' component={SignUpContainer} />
    <AuthRoute exact path='/login' component={LogInContainer} />
    </Switch>
    
    <footer>
      <FooterContainer />
    </footer>

  </div>
)

export default App;
