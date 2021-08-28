import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCheckoutTotal } from '../../redux/checkout-list/checkout-selector';

const TotalContainer = styled.div``;

const TotalPrice = ({ totalPrice }) => {
  const fixedTotalPrice = totalPrice.toFixed(2).toString().replace('.', ',');

  return (
    <TotalContainer>
      <h3>Total a pagar:</h3>
      <span>R$: {fixedTotalPrice}</span>
    </TotalContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  totalPrice: selectCheckoutTotal,
});

export default connect(mapStateToProps)(TotalPrice);
