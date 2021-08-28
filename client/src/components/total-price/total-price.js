import React from 'react';
import styled from 'styled-components';

const TotalContainer = styled.div``;

const TotalPrice = () => {
  return (
    <TotalContainer>
      <h3>Total a pagar:</h3>
      <span>R$: 0000</span>
    </TotalContainer>
  );
};

export default TotalPrice;
