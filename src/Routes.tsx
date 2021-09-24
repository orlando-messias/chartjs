import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import QuickTips from './pages/QuickTips';
import Home from './pages/Home';
import Feeds from './pages/Feeds';
import Onboarding from './pages/Onboarding';

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Onboarding} />
      <Route path="/home" exact component={Home} />
      <Route path="/quick" component={QuickTips} />
      <Route path="/feeds" component={Feeds} />
    </Router>
  );
}

export default Routes;
