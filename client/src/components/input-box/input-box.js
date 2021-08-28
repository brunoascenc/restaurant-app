import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const InputContainer = styled.div`
  /* position: relative;
  .search-icon {
    display: none;
    position: absolute;
    top: 5px;
    right: 5px;
  } */
`;

const Input = styled.input`
  /* padding: 6px;
  width: 300px;
  border: none;
  border-bottom: solid 1px #ccc;
  position: relative; */
`;

const InputBox = ({ placeholder }) => {
  return (
    <InputContainer>
      <Input type="text" placeholder={placeholder} />
      <AiOutlineSearch className="search-icon" />
    </InputContainer>
  );
};

export default InputBox;
