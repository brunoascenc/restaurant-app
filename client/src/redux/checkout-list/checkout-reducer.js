import CheckListActionTypes from './checkout-types';
import {
  addItemToList,
  incrementQuantity,
  decrementQuantity,
} from './checkout-utils';

const INITIAL_STATE = {
  results: [],
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckListActionTypes.ADD_TO_CHECKLIST:
      return {
        ...state,
        results: addItemToList(state.results, action.payload),
      };
    case CheckListActionTypes.REMOVE_FROM_CHECKLIST:
      return {
        ...state,
        results: state.results.filter((item) => item.id !== action.payload.id),
      };
    case CheckListActionTypes.INCREMENT_ITEM:
      return {
        ...state,
        results: incrementQuantity(state.results, action.payload.id),
      };
    case CheckListActionTypes.DECREMENT_ITEM:
      return {
        ...state,
        results: decrementQuantity(state.results, action.payload.id),
      };
    case CheckListActionTypes.CLEAR_LIST:
      return {
        ...state,
        results: [],
      };
    default:
      return state;
  }
};

export default checkoutReducer;
