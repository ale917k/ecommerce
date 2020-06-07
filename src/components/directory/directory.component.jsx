import React, { useState, useEffect } from "react";

import MenuItem from "../menu-item/menu-item.component";

import SECTIONS from "../../sections";

import "./directory.styles.scss";

const Directory = () => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    !sections && setSections(SECTIONS);
  }, [sections]);

  return (
    <div className="directory-menu">
      {sections &&
        sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
    </div>
  );
};

export default Directory;
