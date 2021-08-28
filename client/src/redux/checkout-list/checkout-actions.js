import CheckListActionTypes from './checkout-types';

export const addFood = (item) => ({
  type: CheckListActionTypes.ADD_TO_CHECKLIST,
  payload: item,
});

export const removeFood = (item) => ({
  type: CheckListActionTypes.REMOVE_FROM_CHECKLIST,
  payload: item,
});

export const incrementItem = (item) => ({
  type: CheckListActionTypes.INCREMENT_ITEM,
  payload: item,
});

export const decrementItem = (item) => ({
  type: CheckListActionTypes.DECREMENT_ITEM,
  payload: item,
});

export const clearList = () => ({
  type: CheckListActionTypes.CLEAR_LIST,
});
