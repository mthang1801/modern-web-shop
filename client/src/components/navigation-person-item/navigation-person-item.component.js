import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  NavigationPersonContainer,
  Avatar,
  AvatarContainer,
} from "./navigation-person-item.styles";
const NavigationPersonItem = ({ currentUser, onClick }) => {
  const { displayName, imageUrl } = currentUser;
  return (
    <NavigationPersonContainer onClick={onClick}>
      <AvatarContainer title={displayName}>
        <Avatar src={imageUrl} alt={imageUrl} />
      </AvatarContainer>
    </NavigationPersonContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(NavigationPersonItem);
