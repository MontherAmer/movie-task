import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';

import { test } from './store/_actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(test());
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id" render={() => <Movie />} exact={true} />
          <Route path="/" render={() => <Home />} exact={false} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
