import {ReactComponent as CartIcon} from "../../assets/cart-icon.svg"
import styled from "styled-components";

export const CartIconContainer = styled.div` 
  width : 1.8rem;
  height : 1.8rem;
  position : relative;  
  cursor : pointer;  
  display : block;
  margin-bottom : .25rem;
`

export const CartIconImage = styled(CartIcon)`
  width : 100%;
  height :100%;  
`

export const ItemCount = styled.span`
  position : absolute; 
  text-align :center;
  width : 50%; 
  font-size : .7em;
  left : 25%;
  top : 35%;
  
`