import { createSelector } from 'reselect';

const selectCheckout = (state) => state.checkout;

export const selectCheckoutItems = createSelector(
  [selectCheckout],
  (checkout) => checkout.results
);

export const selectCheckoutTotal = createSelector(
  [selectCheckoutItems],
  (checkoutItems) =>
    checkoutItems.reduce(
      (accumulatedQuantity, checkoutItem) =>
        accumulatedQuantity + checkoutItem.quantity * checkoutItem.preco,
      0
    )
);
