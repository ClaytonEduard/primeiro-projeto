import React, { useState, useEffect } from "react";

import "./styles/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

// Componente em cclasse é uma classe que herda a classe Component do React,
// e retorna HTML dentro do metodo render()
function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );
      const data = await response.data.results;
      console.log(data);
      setNews(data);
    }
    fetchNews();
    console.log(news);
  }, []);

  return (
    <>
      <Navbar />

      {/* <Counter /> */}
      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              display: "flex",
              height: "400px",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThreeDots
              height="200"
              width="200"
              radius="9"
              color="white"
              ariaLabel="loading"
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                url={article.url}
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                thumbmail={article.image_url}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
