import KitchenActionTypes from './kitchen-types';

export const fetchOrdersRequest = () => {
  return {
    type: KitchenActionTypes.FETCH_ORDERS_START,
  };
};

export const getOrders = (data) => {
  return {
    type: KitchenActionTypes.FETCH_ORDERS_SUCCESS,
    payload: data,
  };
};

export const fetchOrdersFailure = (error) => {
  return {
    type: KitchenActionTypes.FETCH_ORDERS_FAILURE,
    payload: error,
  };
};
