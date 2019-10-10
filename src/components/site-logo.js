import React from "react";

import { ReactComponent as Logo } from "../../assets/running.svg";

import "./site-logo.scss";

function SiteLogo() {
  return <Logo className="site-logo" alt="The site logo" />;
}

export default SiteLogo;
