import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectories } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer } from "./directory-menu.styles";
const Directory = ({ directories }) => {
  return (
    <DirectoryMenuContainer>
      {directories.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  directories: selectDirectories,
});

export default connect(mapStateToProps)(Directory);
