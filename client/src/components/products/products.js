import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFood } from '../../redux/checkout-list/checkout-actions';
import { fetchMenuData } from '../../redux/menu-data/menu-actions';

const Products = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.menu);
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchMenuData());
  }, [dispatch]);

  useEffect(() => {
    setMenu(
      menuItems.results.filter(
        (item) =>
          item.sabor.toLowerCase().includes(search.toLowerCase()) ||
          item.id === parseInt(search)
      )
    );
  }, [search, menuItems]);

  return (
    <ul>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Nome ou código..."
      />
      {menu.map((item) => {
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
