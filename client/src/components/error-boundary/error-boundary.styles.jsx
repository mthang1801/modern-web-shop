import styled from "styled-components";


export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width : 100%; 
  display : flex ; 
  flex-direction : column;
  justify-content : center;  
  align-items : center;
`
export const ErrorImageContainer = styled.div`
  background-image : ${({imageUrl}) => `url(${imageUrl})` } ; 
  background-position : center; 
  background-size : cover ; 
  width : 40vh;
  height : 40vh
`
export const ErrorText = styled.div`
  margin : 1.5rem auto;
  font-size : 1.25em;  
  font-weight: bold ; 
`