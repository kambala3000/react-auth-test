import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/About';
import SignupPage from './components/SignupPage';

export default (
<Route path="/" component={ App }>
  <IndexRoute component={ About } />
  <Route path="signup" component={ SignupPage } />
</Route>
);