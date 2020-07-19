import styled from "styled-components";
import {Link} from "react-router-dom";
export const CustomFormContainer = styled.form`
  width : 500px ;
  padding : 3rem 4rem ;
  text-align : center;  
  border: 1px solid #ccc;
  margin : 2rem auto;
  border-radius : 10px;
  box-shadow : 0 3px 6px rgba(0,0,0,0.15);
  @media screen and (max-width: 500px){
    width : 90%;
    padding : 1rem 1.5rem;
  }
`
export const FormHeader = styled.div`
  margin-bottom: 2rem;
`

export const FormGroups = styled.div`
  display : flex;
  width : 100%;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  margin : 2rem auto ;

`

export const FormActions = styled.div`
  display : flex ;
  flex-direction : column;
  justify-content :center;
  align-items: center;  
`

export const ForgotPasswordTitle = styled.h2`
  text-transform : uppercase ;  
  font-size : 2em;
`

export const ForgotPasswordSubTitle = styled.span`
  color : #505050;
  font-size : .95em;
`

export const StyledLink = styled(Link)`
  color : blue;
`

export const Option = styled.span`
  font-size : .95em;
`


export const ErrorMessage = styled.div`
  color : red ; 
  margin-bottom : 1rem;
`
