import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Router>
  );
}

export default Routes;
