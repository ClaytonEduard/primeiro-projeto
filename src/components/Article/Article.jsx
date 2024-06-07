import React from "react"

import articleImg from '../../assets/images/article1.png'

import './styles.css'

export class Article extends React.Component {
    render() {
        return (
            <article id="article">
                <img src={articleImg} width={200} />
                <div className="article-infos">
                    <h2>Designing Dashboard</h2>
                    <h3>Nasa</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugit vel nisi praesentium facilis voluptatem excepturi cupiditate consectetur beatae id. Maxime eum porro enim tenetur repudiandae. Inventore corrupti ratione velit.</p>
                </div>
            </article>
        )
    }
}