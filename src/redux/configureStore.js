/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const enhancer = (process.env.NODE_ENV === 'production') ? (
  compose(applyMiddleware(thunk))
) : (() => {
  const DevTools = require('../containers/DevTools').default;
  return compose(applyMiddleware(thunk), DevTools.instrument());
})();

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);

  if (module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer').default),
    );
  }

  return store;
};

export default configureStore;
