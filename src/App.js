import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import './App.css';



function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>
        <Route path="/checkout">
            <Checkout />
          </Route>
          {/* DEFAULT ROUTE MUST BE AT THE BOTTOM */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
