import React from "react";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  MenuContent,
  Title,
  SubTitle,
} from "./menu-item.styles";
const MenuItem = ({ id, title, size, imageUrl, linkUrl }) => {
  return (
    <MenuItemContainer size={size}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <MenuContent>
        <Title>{title}</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </MenuContent>
    </MenuItemContainer>
  );
};

export default MenuItem;
