import KitchenActionTypes from './kitchen-types';

const initialState = {
  results: {
    name: '',
    orders: [],
  },
  // name: '',
};

const getOrdersData = (state = initialState, action) => {
  switch (action.type) {
    case KitchenActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        results: {
          ...state.results,
          orders: [...state.results.orders, action.payload],
        },
      };
    case KitchenActionTypes.GET_CLIENT_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default getOrdersData;
