import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/page2" component={PageTwo} />
          <Route exact path="/" component={PageOne} />
        </Switch>
      </Router>
    </Provider>
    </>
  );
}

export default App;
