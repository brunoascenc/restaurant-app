import KitchenActionTypes from './kitchen-types';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getOrdersData = (state = initialState, action) => {
  switch (action.type) {
    case KitchenActionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case KitchenActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case KitchenActionTypes.FETCH_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getOrdersData;
