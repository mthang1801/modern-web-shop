import styled from "styled-components";

export const InputGroup = styled.div`  
  width : 100%;
  position : relative;  
  margin : 1rem auto;    
`

export const Input = styled.input`
  width : 100%;
  padding : .7rem; 
  outline : none ;
  border : none ;  
  color : black ;    
  font-size : 1.1em;  
  border : 2px solid #0d47a1  ;
  border-radius : 6px;      
  letter-spacing : ${({type}) => type === "password" ? "0.3em" : "0.05em"};
  background-color : #e3f2fd;
`


export const Label = styled.label`  
  position : absolute ;
  font-size :${({shrinkLabel}) => shrinkLabel ? "0.8em" : "0.9em"};
  color : #404040;
  left : ${({shrinkLabel}) => shrinkLabel ? "7px" : "15px"};
  top : ${({shrinkLabel}) => shrinkLabel ? "-13px" : "15px"};
  padding : 0 8px;
  transition : all .25s ease-out ;  
  background-color : ${({shrinkLabel}) => shrinkLabel ? "white" : "transparent"};
  ${Input}:focus ~ &{
    left: 7px ;
    top : -13px ; 
    font-size : 0.8em;
    background-color : white;
  } 
`

