import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  clearList,
  removeFood,
  incrementItem,
  decrementItem,
} from '../../redux/checkout-list/checkout-actions';
import { getOrders, getClientName } from '../../redux/kitchen/kitchen-actions';

const ListContainer = styled.div``;
const FinishButton = styled.button``;

const CheckoutList = () => {
  const dispatch = useDispatch();
  const checkoutList = useSelector((state) => state.checkout.results);
  const [name, setName] = useState('');

  return (
    <ListContainer>
      <h1>Seus pedidos</h1>
      <input
        type="text"
        placeholder="Seu nome..."
        onChange={(e) => dispatch(getClientName(e.target.value))}
      />
      <ul>
        {checkoutList.map((item) => {
          return (
            <li key={item.id}>
              <div>
                {item.sabor}
                {item.descricao}
              </div>
              <span>Preço: R$: </span>
              {item.preco}
              <button onClick={() => dispatch(decrementItem(item))}>-</button>
              <h1>{item.quantity}</h1>
              <button onClick={() => dispatch(incrementItem(item))}>+</button>
              <button onClick={() => dispatch(removeFood(item))}>
                Remover
              </button>
            </li>
          );
        })}
      </ul>
      <FinishButton
        onClick={() => {
          dispatch(getOrders(checkoutList, name));
          dispatch(clearList());
        }}
      >
        Fazer pedido
      </FinishButton>
    </ListContainer>
  );
};

export default CheckoutList;
