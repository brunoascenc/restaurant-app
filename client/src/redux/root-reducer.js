import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import menuReducer from './menu-data/menu-reducer';
import checkoutReducer from './checkout-list/checkout-reducer';
import kitchenReducer from './kitchen/kitchen-reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['checkout', 'orders'],
};

const rootReducer = combineReducers({
  menu: menuReducer,
  checkout: checkoutReducer,
  orders: kitchenReducer,
});

export default persistReducer(persistConfig, rootReducer);
