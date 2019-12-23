import { Link } from "gatsby";
import React from "react";

import SiteLogo from "./site-logo";
import { SiteNavigation } from "./site-navigation";
import DarkModeToggle from "./dark-mode-toggle";

import "./header.scss";

function Header({ isMain, title, description }) {
  const headerClass = isMain ? "blog-title" : "blog-title-small";
  return (
    <header>
      <div className="header-container">
        <h1 className={headerClass}>
          <Link to={`/`}>{title}</Link>
          {isMain && <SiteLogo />}
        </h1>
        <DarkModeToggle />
        {isMain && <p className="blog-description">{description}.</p>}
        <SiteNavigation />
      </div>
    </header>
  );
}

export default Header;
