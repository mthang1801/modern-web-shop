import styled from "styled-components";

export const CollectionContainer = styled.div`
  display : flex ;  
  flex-direction : column;
  align-items : center;
`

export const CollectionTitle = styled.h2`
  font-size : 2em ; 
`

export const CollectionItems = styled.div`
  display : grid ; 
  grid-template-columns : 1fr 1fr 1fr 1fr ; 
  grid-gap : .8rem;
  @media screen and (max-width : 800px){    
    grid-template-columns: 1fr 1fr; 
    width : 100%; 
  }
  @media screen and (max-width : 500px){    
    grid-template-columns: 1fr; 
    width : 100%; 
  }
`