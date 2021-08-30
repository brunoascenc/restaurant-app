import KitchenActionTypes from './kitchen-types';

export const getOrders = (data) => {
  return {
    type: KitchenActionTypes.FETCH_ORDERS_SUCCESS,
    payload: data,
  };
};

export const getClientName = (name) => {
  return {
    type: KitchenActionTypes.GET_CLIENT_NAME,
    data: name,
  };
};
