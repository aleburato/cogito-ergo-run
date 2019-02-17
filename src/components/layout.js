// @ts-nocheck

import { Link } from "gatsby";
import React from "react";

import logo from "../../content/assets/running.svg";
import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
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
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`
              }}
              to={`/`}
            >
              {title}
            </Link>
            <img
              alt="The site logo"
              style={{ width: "32px", height: "32px", margin: "0 0 0 0.2em" }}
              src={logo}
            />
          </h1>
          <p style={{ fontStyle: "italic" }}>{description}</p>
        </div>
      );
    } else {
      header = (
        <h3
          style={{
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
