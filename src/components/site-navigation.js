import { Link } from "gatsby";
import React from "react";

import "./site-navigation.scss";

const SiteNavigation = React.memo(() => {
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
});

export default SiteNavigation;
