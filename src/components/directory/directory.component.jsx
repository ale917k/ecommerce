import React, { useState, useEffect } from "react";

import SECTIONS from "../../SECTIONS";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    !sections && setSections(SECTIONS);
  }, [sections]);

  return (
    <div className="directory-menu">
      {sections &&
        sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
    </div>
  );
};

export default Directory;
