// @ts-nocheck

import { rhythm, scale } from "../utils/typography";

import { Link } from "gatsby";
import React from "react";
import logo from "../../content/assets/running.svg";

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
            ...scale(1.6),
            marginTop: 0,
            marginBottom: 0
          }}
        >
          <Link to={`/`}>{title}</Link>
          <img
            alt="The site logo"
            style={{ width: "32px", height: "32px", margin: "0 0 0 0.2em" }}
            src={logo}
          />
        </h1>
        <p>
          {" "}
          <em>{description}</em>
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
          <Link
            style={{
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <p>...</p>
      </div>
    );

    return <header>{header}</header>;
  }
}

export default Header;
