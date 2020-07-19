import React, { useEffect, useRef } from "react";
import {
  PersonalCardSettingContainer,
  PersonalCardItem,
} from "./personal-card-setting.styles";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { auth } from "../../utils/firebase";
import { connect } from "react-redux";
import {
  setCardPersonToggle,
  setCardPersonClose,
} from "../../redux/card-person/card-person.actions";
const PersonalCardSetting = ({ setCardPersonToggle, setCardPersonClose }) => {
  const cardRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (cardRef) {
        setCardPersonClose();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [cardRef, setCardPersonClose]);
  return (
    <PersonalCardSettingContainer ref={cardRef}>
      <PersonalCardItem>
        <FaCog />
        Setting
      </PersonalCardItem>
      <PersonalCardItem
        onClick={() => {
          auth.signOut();
        }}
      >
        <FaSignOutAlt /> Signout
      </PersonalCardItem>
    </PersonalCardSettingContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setCardPersonToggle: () => dispatch(setCardPersonToggle()),
  setCardPersonClose: () => dispatch(setCardPersonClose()),
});
export default connect(null, mapDispatchToProps)(PersonalCardSetting);
