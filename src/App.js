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
            <section className="h-screen w-full">
              <div className='container mx-auto py-8'>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/:id" component={Dashboard} />
                </Switch>
              </div>
            </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
