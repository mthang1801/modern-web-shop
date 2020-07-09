import styled from "styled-components";


export const BackgroundImageContainer = styled.div`
  width : 100%;
  height : 100%;    
  background-position: center;
  background-size: cover;     
  background-image:  ${({imageUrl}) => `url(${imageUrl})`} 
`
export const MenuItemContainer = styled.div`
  min-width : 30%;
  height: ${({size}) => size ? "360px" : "250px"};
  display : flex ; 
  flex-direction: column;
  justify-content: space-between;
  align-items : center;
  margin : 1.2rem .5rem;  
  flex : 1 1 auto;
  position : relative;  
  overflow : hidden;
  &:hover{
    cursor : pointer;
    ${BackgroundImageContainer}{
      transition : transform 6s cubic-bezier(.37,.02,.44,.95);
      transform : scale(1.05);
    }
  }
`


export const MenuContent = styled.div`
  position : absolute;
  border:  1px solid black;
  height : 80px;
  display : flex;  
  top : 50%;
  transform : translateY(-50%);
  flex-direction : column;    
  justify-content : center;
  background-color : white;
  padding : .5rem 1.25rem;
  opacity : .7;
  text-align : center;
  color : #424242;
  &:hover{
    opacity : .9;
    cursor : pointer;
  }
`

export const Title = styled.h2`
  font-size : 1.2em;   
`

export const SubTitle = styled.h4`
  font-size : 1.1em;  
`