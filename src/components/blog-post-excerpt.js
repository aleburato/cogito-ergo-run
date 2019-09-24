import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "./featured-image";

export function BlogPostExcerpt({ post }) {
  const {
    frontmatter: { date, title, featuredImage, featuredImageDesc },
    excerpt,
    fields: { slug }
  } = post;
  const actualTitle = title || slug;
  return (
    <div className="post-block" key={slug}>
      <h2 className="blog-post-title">
        <Link to={slug}>{actualTitle}</Link>
      </h2>
      <p className="blog-post-date txt-small txt-muted">{date}</p>
      <Link to={slug}>
        <FeaturedImage image={featuredImage} imageCaption={featuredImageDesc} />
      </Link>
      <div
        className="post-excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
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
