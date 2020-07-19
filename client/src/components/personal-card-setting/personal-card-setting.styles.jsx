import styled from "styled-components";

export const PersonalCardSettingContainer = styled.div`
  display : flex ; 
  flex-direction : column ; 
  align-items : center;
  background-color : white;
  border : 1px solid #ccc ;
  border-radius : 5px;
`

export  const PersonalCardItem = styled.div`
  padding : .5rem 2rem;
  cursor : pointer;
  margin : 0;
  display : flex ; 
  justify-content : space-around ; 
  align-items : center;
  & > *{
    margin-right : 5px;
  }
  &:not(:last-child){
    border-bottom : 1px solid #ccc;
  }
  &:hover{
    background-color : #ddd;
  }
`
