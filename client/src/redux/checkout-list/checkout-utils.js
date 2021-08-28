export const addItemToList = (checkoutItem, foodToAdd) => {
  const existingItem = checkoutItem.find((item) => item.id === foodToAdd.id);

  if (existingItem) {
    return checkoutItem.map((item) =>
      item.id === foodToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...checkoutItem, { ...foodToAdd, quantity: 1 }];
};

//Items Quantity
export const decrementQuantity = (checkoutItem, id) => {
  checkoutItem.forEach((item) => {
    if (item.id === id) {
      item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
    }
  });
  return [...checkoutItem];
};

export const incrementQuantity = (checkoutItem, id) => {
  checkoutItem.forEach((item) => {
    if (item.id === id) {
      item.quantity += 1;
    }
  });
  return [...checkoutItem];
};
