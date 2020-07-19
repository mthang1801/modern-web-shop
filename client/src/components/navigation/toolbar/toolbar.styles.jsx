import styled from "styled-components";

export const ToolbarContainer = styled.div`
  width : 100%; 
  height : 100%;
 
`

export const Content = styled.div`
  display : flex ; 
  height : 100%;
  justify-content : space-between;
  align-items : center;
  flex : 1 ;
`

export const LogoContainer = styled.div`
  width : 75px;
  margin-left : 1rem;    
`

export const OptionsOnlyDesktop = styled.div`
  display : flex; 
  height : 100%; 
  width : 80%;
  justify-content: flex-end; 
  align-items : center;
  @media screen and (max-width: 499px){
    display : none;
  }
`

export const OptionsOnlyMobile = styled.div`  
  @media screen and (min-width : 500px){
    display : none ; 
  }
`
export const PersonalCardSettingContainer = styled.div`
  position : absolute ; 
  top : 85%;
  right : 2%;
  box-shadow : 0 3px 5px rgba(0,0,0,.25);
  z-index : 1;
`