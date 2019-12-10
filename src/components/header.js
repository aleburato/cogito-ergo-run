import { Link } from "gatsby";
import React from "react";

import SiteLogo from "./site-logo";
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

function SiteNavigation() {
  const SITE_MAP = [
    { path: "/", name: "Blog" },
    { path: "/attrezzatura", name: "Attrezzatura" },
    { path: "/contattami", name: "Contattami" }
  ];
  return (
    <ul className="site-navigation">
      {SITE_MAP.map(item => (
        <li key={item.name}>
          <Link activeClassName="site-navigation-active-item" to={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Header;
