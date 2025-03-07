import React from "react";
import "./styles.css";

export function Article({ title, thumbmail, provider, description }) {
  return (
    <article id="article">
      <img src={thumbmail} width={200} alt={title} />
      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
