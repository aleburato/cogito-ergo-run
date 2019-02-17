// @ts-nocheck

import React from "react";

import { rhythm } from "../utils/typography";
import Header from "./header";

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <Header
          isMain={location.pathname === rootPath}
          title={title}
          description={description}
        />
        <main>{children}</main>
        <footer>
          <p>...</p>
          <p>
            <em>
              <small>
                © {new Date().getFullYear()}, built with a lot of love and{" "}
                <a href="https://www.gatsbyjs.org">gatsbyjs</a>
              </small>
            </em>
          </p>
        </footer>
      </div>
    );
  }
}

export default Layout;
