import styled from "styled-components";

export const CheckoutTable = styled.div`
  display : flex ; 
  flex-direction : column;
  width : 85% ;   
  margin : auto;
`

export const CheckoutHeader = styled.div`
  display : flex ;  
  font-weight : bold;  
  border-bottom : 1px solid #ccc;
  padding-bottom : .5rem;
`

export  const ProductBlock = styled.div`
  flex : 2 ;
`

export  const DescriptionBlock = styled.div`
  flex : 3 ;
`

export  const QuantityBlock = styled.div`
  flex : 2 ;
`

export  const PriceBlock = styled.div`
  flex : 2 ;
`

export  const TotalPriceBlock = styled.div`
  flex : 2 ;
`

export  const RemoveBlock = styled.div`
  flex : 1 ;
`

export const CheckoutBody = styled.div`
  border-bottom : 1px solid #ccc;
`

export const CheckoutFooter = styled.footer`
  margin : 1rem 0;    
  display : flex ; 
`

export const TotalPrice = styled.div`
  margin-right : 1rem;
  font-size : 1.1em;
  font-weight: bold ; 
  flex : 2;
`