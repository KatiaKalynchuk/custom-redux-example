import React from 'react';
import { Provider } from 'react-redux';
import { counter } from './example';
const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);