import React from "react";

import Logo from "../../assets/running.svg";

import "./site-logo.scss";

function SiteLogo() {
  return (
    <Logo
      className="site-logo"
      alt="The site logo"
      style={{ width: "24px", height: "24px", margin: "0 0 0 -0.1em" }}
    />
  );
}

export default SiteLogo;
