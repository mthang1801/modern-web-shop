import React from "react";
import styled from "styled-components";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {Link, useRouteMatch} from "react-router-dom";
export const HeaderContainer = styled.div`
  width : 100%; 
  height : 65px;
  padding : 1rem ;
  position :relative;
`

export const Content = styled.div`
  display : flex ; 
  height : 100%;
  justify-content : space-between;
  align-items : center;
  flex : 1 ;
`

export const LogoContainer = styled(Logo)`
  width : 70px;
  margin-left : 1rem;  
`

export const OptionsContainer = styled.div`
  display : flex; 
  height : 100%; 
  width : 50%;
  justify-content: flex-end; 
  align-items : center;
`

export const Option = styled.div`
  padding : .5rem ;
`
export const OptionLink = styled(Link)`
  cursor: pointer;
  padding : .5rem ;
  text-transform: uppercase;
  &:hover{
    color : black;
    font-weight : bold;
`

const ActiveLink = styled(Link)`
  text-transform: uppercase;
  color : black ; 
  font-weight : bold ; 
`

export const CustomLink = ({to, children, ...otherProps}) => {
  const match = useRouteMatch({
    path : to 
  })  
  return match && match.isExact ? (
    <ActiveLink to={to} {...otherProps}>{children}</ActiveLink>
  ) : (
    <OptionLink to={to} {...otherProps}>{children}</OptionLink>
  )
}

