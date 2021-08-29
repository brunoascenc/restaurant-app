import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Kitchen = () => {
  // const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.results);

  return (
    <div>
      <h1>Pedidos Pendentes</h1>
      <ul>
        {orders.map((item) => {
          return (
            <li key={item.id}>
              <div>
                {item.sabor}
                {item.descricao}
              </div>
              <span>Preço: R$: </span>
              {item.preco}
              <h1>{item.quantity}</h1>
              <button>Finalizado</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Kitchen;
