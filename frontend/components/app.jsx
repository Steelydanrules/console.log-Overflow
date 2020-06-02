import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import SignUpContainer from './session/signup_container';

const App = () => (
  <div>
    <header>
      <Link to="/api/signup" component={SignUpContainer}> Sign up </Link>

      app
    </header>
  </div>
)

export default App;
