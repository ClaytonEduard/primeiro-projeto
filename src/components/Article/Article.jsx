import React from "react";
import "./styles.css";

export function Article({url, title, thumbmail, provider, description }) {
  return (
    <article id="article">
      <img src={thumbmail} alt={title} />
      <div className="article-infos">
        <a href={url} target="_blank" rel="noreferrer">
          <h2>{title}</h2>
        </a>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
