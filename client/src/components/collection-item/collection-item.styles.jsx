import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const AddButton = styled(CustomButton)` 
  font-size : 1em;
  position : absolute;
  width : 60%;
  top : 70%;
  left:  50%;
  transform : translate(-50%,-50%); 
  opacity : .7 ; 
  &:hover{
    opacity : .9;
  }
  &:active{
    background-color : #ddd;
  }
`
export const CollectionItemContainer = styled.div`
  width : 22.5vw; 
  height : 380px; 
  display : flex ; 
  flex-direction: column; 
  align-items : space-between ;
  position : relative ; 
  border: 1px solid #ccc;
  border-radius : 5px ;
  box-shadow : 0 2px 5px rgba(0,0,0,.2);
  margin : 2rem auto; 
  ${AddButton}{
    display : none ;
  }
  &:hover{
    ${AddButton}{
      display: block;
    }
  }
  
  @media screen and (max-width: 800px){
    width : 45vw;
  }
  @media screen and (max-width : 500px){
    width : 100%;
    margin : 1rem auto;
  }
`

export const BackgroundImageContainer = styled.div`
  width : 100%; 
  height : 100%; 
  background-image : ${({imageUrl}) => `url(${imageUrl})`} ; 
  background-position : center; 
  background-size : cover ; 
`
BackgroundImageContainer.name = BackgroundImageContainer;

export const CollectionItemContent = styled.div`    
  width : 100%;
  padding : 1rem;
  display : flex ;
`

export const CollectionItemName = styled.span`
  width : 85%;
  font-size : 1em ; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`
export const CollectionItemPrice = styled.span`
  width : 15%;
  font-size : 1em ; 
  font-weight : bolder;  
`

