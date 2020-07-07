import styled from  "styled-components";

export const CartDropdownContainer = styled.div`
  width : 320px;
  height : 350px;
  display : flex;   
  flex-direction : column;
  border : 1px solid #ccc;
  padding : 1rem 2rem;
  align-items : center;
  position : absolute; 
  right : 1.5rem;
  top: 60px;  
  background-color : white;
  border-radius : 5px;  
  z-index : 1;
  overflow-x: hidden;
  &:before{
    content : "" ;
    position : absolute ;
    border : 8px solid #ccc;  
    border-color : transparent  transparent #ccc transparent ; 
    right : 0rem;
    top : -1rem;
  }
`

export const CartDropdownItems = styled.div`
  width : 100%;
  height : 85% ;
  overflow : auto;
`
export const CartDropdownFooter = styled.div`
  height : 15%;
`


export const NoCartItems = styled.div`
  position : absolute; 
  font-weight : bold;
  left: 50%;
  top : 40%; 
  transform : translate(-50%, -50%);
`