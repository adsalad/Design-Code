import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen'
import AppNavigator from './navigator/AppNavigator';

//default state
const initialState = {
  action: "",
  name: ""
};

/*
breaks down the data before storing based on the passed in action.type (and payload) 
from the component interaction that is dispatched
*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

//provider takes the infromation in the store and supplies the components
const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;