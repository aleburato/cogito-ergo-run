// @ts-nocheck

import { Link } from "gatsby";
import React from "react";

import logo from "../../content/assets/running.svg";
import { rhythm, scale } from "../utils/typography";

class Header extends React.Component {
  render() {
    const { isMain, title, description } = this.props;

    const header = isMain ? (
      <div
        style={{
          marginBottom: rhythm(1.5)
        }}
      >
        <h1
          style={{
            ...scale(1.2),
            marginTop: 0,
            marginBottom: 0
          }}
        >
          <Link to={`/`}>{title}</Link>
          <img
            alt="The site logo"
            style={{ width: "30px", height: "30px", margin: "0 0 0 -0.1em" }}
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
}

export default Header;
