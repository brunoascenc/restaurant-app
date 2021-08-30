import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Kitchen = () => {
  // const dispatch = useDispatch();
  // const name = useSelector((state) => state.orderss.name);
  const orders = useSelector((state) => state.orders.results.orders);
  console.log(orders)

  return (
    <div>
      <h1>Pedidos Pendentes</h1>
      <ul>

      </ul>
    </div>
  );
};

export default Kitchen;
