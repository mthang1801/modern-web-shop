import React from "react" ; 
import {ReactComponent as CartIcon} from "../../assets/cart-icon.svg"
import styled from "styled-components";

export const CartIconContainer = styled.div` 
  width : 2.2rem;
  height : 40px;
  position : relative;  
  cursor : pointer;  
  display : block;
`

export const CartIconImage = styled(CartIcon)`
  width : 100%;
  height :100%;  
`

export const ItemCount = styled.span`
  position : absolute; 
  text-align :center;
  width : 50%; 
  font-size : .8em;
  left : 25%;
  top : 40%;
  
`