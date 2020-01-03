import React from "react";

import "./footer.scss";

function Footer() {
  return (
    <footer>
      <p>...</p>
      <p className="site-copyright">
        ©2018-{new Date().getFullYear()} Alessandro Burato, costruito con amore,
        sudore, odore e <a href="https://www.gatsbyjs.org">gatsbyjs</a>.<br />
        p.s.:{" "}
        <a href="https://amzn.to/33okzLh">cosa faresti se non avessi paura?</a>
      </p>
    </footer>
  );
}

export default Footer;
