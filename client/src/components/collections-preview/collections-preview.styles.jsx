import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display : flex ;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size : 1.7em;     
  margin :2rem 0 .5rem 0 ;
  cursor: pointer; 
  color : #424242 ; 
  &:hover{
    color : black;
  }
`

export const Items = styled.div`
  display : grid ;
  grid-template-columns: 1fr 1fr 1fr 1fr;    
  grid-gap : .5rem ;
  @media screen and (max-width : 800px){    
    grid-template-columns: 1fr 1fr; 
    width : 100%; 
  }
  @media screen and (max-width : 500px){    
    grid-template-columns: 1fr; 
    width : 100%; 
  }
`