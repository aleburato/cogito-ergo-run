import React from "react";
import Img from "gatsby-image";

export default function PostFeaturedImage({ image, imageCaption }) {
  return (
    <div className="post-featured-image-wrapper">
      <Img
        className="post-featured-image"
        fluid={image.childImageSharp.fluid}
      />
      <span className="post-featured-image-desc">{imageCaption}</span>
    </div>
  );
}
