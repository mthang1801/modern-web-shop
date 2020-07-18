import styled from "styled-components";

export const ToggleDrawerContainer = styled.div`
  width : 40px; 
  height :40px;
  display : flex ;   
  flex-direction : column;
  justify-content : space-around ;
  align-items : center;
  border : 1px solid #454545 ; 
  border-radius : 5px;  
  padding : 5px;
  cursor : pointer;
  &:hover, &:hover > *{
    border-color : black;
  }
`

export const Dash = styled.div`
  width: 80% ;
  height : 1px ;
  background-color : #454545;
`