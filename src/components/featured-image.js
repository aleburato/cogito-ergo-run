import React from "react";
import Img from "gatsby-image";

import "./featured-image.scss";

export default function FeaturedImage({ image, imageCaption }) {
  return (
    <div className="featured-image-wrapper">
      <Img
        className="post-featured-image"
        fluid={image.childImageSharp.fluid}
      />
      <span className="post-featured-image-desc gatsby-resp-image-figcaption">
        {imageCaption}
      </span>
    </div>
  );
}
