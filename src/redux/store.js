import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['bookmarks']
  };

const middleware = [thunk];
const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export const persistor = persistStore(store);

export default store