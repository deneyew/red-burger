import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LayoutB from './components/layout/LayoutB';
import Locations from './pages/Locations';
import Menu from './pages/Menu';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Fragment>
      <LayoutB>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/menu" />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </LayoutB>
    </Fragment>
  );
}

export default App;
