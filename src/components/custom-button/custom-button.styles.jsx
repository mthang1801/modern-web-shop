import styled, {css} from "styled-components";


export const ButtonStyle = css`
  background-color : black ; 
  color : white; 
  border : none ; 
  &:hover{
    background-color : white ; 
    color:  black ; 
    border : 1px solid black;    
  }
`

const ButtonColor = css`
  background-color : ${({color}) => color ? `${color}` : "black"};
`
const VariantOutlined = css`
  background-color: white ; 
  color : ${({color}) => color ? `${color}` : "black"};
  border :  ${({color}) => color ? `1px solid ${color}` : "1px solid black"};
  &:hover{
    background-color :  ${({color}) => color ? `${color}` : "black"};
    color : ${({})}
  }
`

const VariantContained = css`

`

const Variant

const getButtonStyles = props => {
  return ButtonStyle;
}


export const CustomButtonContainer = styled.button`  
  text-transform : uppercase ;
  width : auto ; 
  height : 50px;
  letter-spacing : .5px ; 
  line-height : 50px;
  padding : 0 1.5rem 0 1.5rem ;  
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius : 5px;
  ${getButtonStyles};
  ${ButtonColor};
`