import React from 'react';
import Products from '../../components/products/products';
import ProductsList from '../../components/products-list/products-list';
import TotalPrice from '../../components/total-price/total-price';
import InputBox from '../../components/input-box/input-box';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh; */
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <div>
        <InputBox placeholder={'Nome ou código...'} />
        <Products />
      </div>
      <div>
        <InputBox placeholder={'Digite seu nome'} />
        <TotalPrice />
        <ProductsList />
      </div>
    </CheckoutContainer>
  );
};

export default Checkout;
