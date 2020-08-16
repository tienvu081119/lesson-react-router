import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';

const  App = (showContentMenus) => {
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main} />
        )
      })
    }
    return result;
  }
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          {showContentMenus(routes)}
        </Switch>
      </Router>
    </>
  );
}

export default App;
