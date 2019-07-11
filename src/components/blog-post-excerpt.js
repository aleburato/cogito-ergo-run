import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";

export function BlogPostExcerpt({ post }) {
  const {
    frontmatter: { date, title, featuredImage, featuredImageDesc },
    excerpt,
    fields: { slug }
  } = post;
  const actualTitle = title || slug;
  return (
    <div className="post-block" key={slug}>
      <h2
        style={{
          marginBottom: 0
        }}
      >
        <Link to={slug}>{actualTitle}</Link>
      </h2>
      <p className="txt-small txt-muted">{date}</p>
      <Link to={slug}>
        <Img
          className="post-featured-image"
          fluid={featuredImage.childImageSharp.fluid}
        />
      </Link>
      <p className="image-desc">
        <em>{featuredImageDesc}</em>
      </p>
      <div className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <p>
        <small>
          <em>
            <Link to={slug}>(leggi tutto)</Link>
          </em>
        </small>
      </p>
    </div>
  );
}
