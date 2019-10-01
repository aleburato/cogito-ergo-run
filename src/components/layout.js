import Header from "./header";
import React from "react";

import "./layout.scss";

function Layout({ location, title, description, children }) {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <div className="layout-container">
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
              © {new Date().getFullYear()}, costruito con amore, sudore, odore e{" "}
              <a href="https://www.gatsbyjs.org">gatsbyjs</a>.
            </small>
          </em>
        </p>
      </footer>
    </div>
  );
}

export default Layout;
