import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    padding : 0; 
    margin : 0 ; 
    box-sizing: border-box; 
  }
  body{
    font-family : Roboto, "sans serif";
    font-size : 1em ; 
    line-height : 1.6;    
  }
`;

export const Container = styled.div`
  width: 95%;
  margin: auto;
  @media screen and (min-width: 800px) {
    width: 88%;
  }  
`;
