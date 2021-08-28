import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
*:focus {
  outline: none;
 }
a{
  text-decoration: none;
 }
 body{
    font-family: 'Roboto', sans-serif;
 }
 ul{
   list-style: none;
 }
`;

export default GlobalStyle;
