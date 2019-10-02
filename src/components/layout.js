import React from "react";

import Header from "./header";
import Footer from "./footer";

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
      <Footer />
    </div>
  );
}

export default Layout;
