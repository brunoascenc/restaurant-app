import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import menuReducer from './menu-data/menu-reducer';
import checkoutReducer from './checkout-list/checkout-reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['checkout'],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  checkout: checkoutReducer,
});

export default persistReducer(persistConfig, rootReducer);
