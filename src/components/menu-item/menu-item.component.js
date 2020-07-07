import React from "react";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  MenuContent,
  Title,
  SubTitle,
} from "./menu-item.styles";
import { withRouter } from "react-router-dom";
const MenuItem = ({ id, title, size, imageUrl, linkUrl, history, match }) => {
  return (
    <MenuItemContainer size={size}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <MenuContent onClick={() => history.push(`${match.path}${linkUrl}`)}>
        <Title>{title}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </MenuContent>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
