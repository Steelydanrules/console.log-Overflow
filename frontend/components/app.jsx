import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import SignUpContainer from './session/signup_container';

const App = () => (
  <div>
    <header>
      <SignUpContainer />
    </header>
  </div>
)

export default App;
