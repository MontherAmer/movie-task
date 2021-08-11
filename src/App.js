import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';

const App = () => {
  return (
    <div className="container-fluid pt-4">
      <div className="row">
        <div className="col">
          <Router>
            <Switch>
              <Route path="/movie/:id" render={() => <Movie />} exact={true} />
              <Route path="/" render={() => <Home />} exact={false} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
