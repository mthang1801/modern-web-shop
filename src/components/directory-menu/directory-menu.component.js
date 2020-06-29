import React from "react";
import DIRECTORY_DATA from "./directory-menu.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";
const Directory = (props) => {
  return (
    <div className="directory">
      {DIRECTORY_DATA.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
