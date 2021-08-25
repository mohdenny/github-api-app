import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

// Redux 
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
            <section className='container mx-auto p-8'>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/:id" component={Dashboard} />
              </Switch>
            </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
