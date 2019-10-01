import { Link } from "gatsby";
import React from "react";

import SiteLogo from "./site-logo";

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
        {isMain ? (
          <p className="blog-description">{description}.</p>
        ) : (
          <p>...</p>
        )}
      </div>
    </header>
  );
}

export default Header;
