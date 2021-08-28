import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFood } from '../../redux/checkout-list/checkout-actions';
import { fetchMenuData } from '../../redux/menu-data/menu-actions';

const Products = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  return (
    <ul>
      {menuItems.results.map((item) => {
        return (
          <li key={item.id}>
            <div>
              {item.sabor}
              {item.descricao}
            </div>
            <span>Preço: R$: </span>
            {item.preco}
            <button onClick={() => dispatch(addFood(item))}>Selecionar</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
