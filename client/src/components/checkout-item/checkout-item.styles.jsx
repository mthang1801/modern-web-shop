import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display : flex ; 
  align-items : center;
  margin : 1.5rem 0 ;  
  padding-bottom : .5rem;
`

export const BackgroundImageContainer = styled.div`   
  flex : 2;
  @media screen and (max-width : 800px){
    display : none ;
  }
`

export const BackgroundImage = styled.img`
  width : 6.5rem; 
  height: 6.5rem;
`

export const ItemName = styled.div`
  font-weight : bold ; 
  font-size : 1.1em;  
  flex : 3 ; 
`

export const ItemQuantity = styled.div`
  flex : 2;
  display : flex ; 
  font-size : 1em;
  
`
export const DecreaseItem = styled.span`
  color : #606060; 
  cursor: pointer;  
  &:hover{
    color : black;
  }
  font-size : .9em;
`
export const IncreaseItem = styled.span`
  color : #606060; 
  cursor: pointer;  
  &:hover{
    color : black;
  }
  font-size : .9em;
`


export const ItemPrice = styled.div`
  flex : 2;
`

export const ItemTotalPrice = styled.div`
  flex : 2;
`

export const RemoveItem = styled.span`  
  flex : 1;
  color : #9e9e9e;  
  cursor : pointer ; 
  &:hover{
    color : black;
  }  
`