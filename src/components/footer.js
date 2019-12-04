import React from "react";

import "./footer.scss";

function Footer() {
  return (
    <footer>
      <p>...</p>
      <p className="site-copyright">
        © {new Date().getFullYear()}, costruito con amore, sudore, odore e{" "}
        <a href="https://www.gatsbyjs.org">gatsbyjs</a>. p.s.:{" "}
        <a href="https://amzn.to/33okzLh">cosa faresti se non avessi paura?</a>
      </p>
    </footer>
  );
}

export default Footer;
