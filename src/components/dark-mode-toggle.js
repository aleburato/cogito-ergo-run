import React from "react";
import useDarkMode from "use-dark-mode";

import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

import Toggle from "./toggle";

import "./dark-mode-toggle.scss";

const ICONS = {
  checked: <img src={moon} alt="" />,
  unchecked: <img src={sun} alt="" />
};

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <Toggle
      className="dark-mode-toggle"
      icons={ICONS}
      checked={darkMode.value}
      onChange={darkMode.toggle}
    />
  );
};

export default DarkModeToggle;
