// Redux is a state management library for javaScript applications, commonly used with React.
// It help manage the state of an application in a predictable way. 


// step 1


import { createStore } from 'redux';

// Initial state
const initialState = {
  count: 0
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;




// step 2

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// step 3

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  // Accessing the state from Redux store
  const count = useSelector((state) => state.count);

  // Creating dispatch function to send actions
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Redux Counter Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};




