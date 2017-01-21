/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import 'normalize.css';
import routes from './routes';
import configureStore from './redux/configureStore';
import './styles/global.css';

const store = configureStore();


const render = (r) => {
  const content = (process.env.NODE_ENV === 'production') ? (
    <Provider store={store}>
      <Router history={browserHistory} routes={r} />
    </Provider>
  ) : (() => {
    const { AppContainer } = require('react-hot-loader');
    const DevTools = require('./containers/DevTools').default;
    return (
      <AppContainer>
        <Provider store={store}>
          <div className="dev-only">
            <Router history={browserHistory} routes={routes} />
            <DevTools />
          </div>
        </Provider>
      </AppContainer>
    );
  })();

  ReactDOM.render(
    content,
    document.getElementById('root'),
  );
};

render(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    render(newRoutes);
  });
}
