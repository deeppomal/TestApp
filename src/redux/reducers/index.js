import { combineReducers } from  'redux';

import cartReducer from './cartReducer';
import productReducer from './productReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
   
  };
  
export default combineReducers({
   
    cart: persistReducer(persistConfig, cartReducer),
    products: productReducer,
})