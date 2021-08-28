import MenuActionTypes from './menu-action-types';

const initialState = {
  loading: false,
  results: [],
  error: '',
};

const getMenuData = (state = initialState, action) => {
  switch (action.type) {
    case MenuActionTypes.FETCH_MENU_START:
      return {
        ...state,
        loading: true,
      };
    case MenuActionTypes.FETCH_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case MenuActionTypes.FETCH_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getMenuData;
