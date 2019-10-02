import React from "react";

import "./footer.scss";

function Footer() {
  return (
    <footer>
      <p>...</p>
      <p className="site-copyright">
        © {new Date().getFullYear()}, costruito con amore, sudore, odore e{" "}
        <a href="https://www.gatsbyjs.org">gatsbyjs</a>.
      </p>
    </footer>
  );
}

export default Footer;
