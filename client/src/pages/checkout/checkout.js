import React from 'react';
import Products from '../../components/products/products';
import CheckoutList from '../../components/checkout-list/checkout-list';
import TotalPrice from '../../components/total-price/total-price';
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
        {/* <InputBox placeholder={'Nome ou código...'} /> */}
        <Products />
      </div>
      <div>
        <TotalPrice />
        <CheckoutList />
      </div>
    </CheckoutContainer>
  );
};

export default Checkout;
