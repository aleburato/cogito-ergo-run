import React from "react";
import { Link } from "gatsby";

import FeaturedImage from "./featured-image";

import "./blog-post-excerpt.scss";

export function BlogPostExcerpt({ post }) {
  const {
    frontmatter: { date, title, featuredImage, featuredImageDesc },
    excerpt,
    fields: { slug }
  } = post;
  const actualTitle = title || slug;
  return (
    <div className="post-block" key={slug}>
      <Link to={slug}>
        <h2 className="blog-post-title">{actualTitle}</h2>
        <p className="blog-post-date">{date}</p>
        <FeaturedImage image={featuredImage} imageCaption={featuredImageDesc} />
        <div
          className="blog-post-excerpt"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <p className="read-all">(leggi tutto)</p>
      </Link>
    </div>
  );
}
