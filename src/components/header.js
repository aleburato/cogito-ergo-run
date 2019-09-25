import { Link } from "gatsby";
import React from "react";

import logo from "../../content/assets/running.svg";
import { rhythm } from "../utils/typography";

function Header({ isMain, title, description }) {
  const header = isMain ? (
    <div
      style={{
        marginBottom: rhythm(1.5)
      }}
    >
      <h1 className="blog-title">
        <Link to={`/`}>{title}</Link>
        <img
          alt="The site logo"
          style={{ width: "24px", height: "24px", margin: "0 0 0 -0.1em" }}
          src={logo}
        />
      </h1>
      <p>
        <em>{description}.</em>
      </p>
    </div>
  ) : (
    <div>
      <h3
        style={{
          marginTop: 0,
          marginBottom: "0.25em"
        }}
      >
        <Link to={`/`}>{title}</Link>
      </h3>
      <p>...</p>
    </div>
  );

  return <header>{header}</header>;
}

export default Header;
