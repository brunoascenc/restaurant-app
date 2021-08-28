import axios from 'axios';

import MenuActionTypes from './menu-action-types';

export const fetchMenuRequest = () => {
  return {
    type: MenuActionTypes.FETCH_MENU_START,
  };
};

export const fecthMenuSuccess = (data) => {
  return {
    type: MenuActionTypes.FETCH_MENU_SUCCESS,
    payload: data,
  };
};

export const fetchMenuFailure = (error) => {
  return {
    type: MenuActionTypes.FETCH_MENU_FAILURE,
    payload: error,
  };
};

export const fetchMenuData = () => async (dispatch) => {
  dispatch(fetchMenuRequest());
  try {
    const { data } = await axios.get('/api/menu');
    dispatch(fecthMenuSuccess(data));
  } catch (error) {
    dispatch(fetchMenuFailure(error.message));
  }
};
