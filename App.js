import React, {Component} from 'react';
import Navigation from './src/navigation'

import { Provider } from 'react-redux';


import { PersistGate } from 'redux-persist/integration/react';

import {  persistor } from './src/redux/store';
import store from './src/redux/store'
class App extends Component {
  render() {
    
    return( 

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    )
    
  }
}
export default App;