import React from 'react'


import './styles/App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';

import article1Img from "./assets/images/article1.png";
import article2Img from "./assets/images/article2.png";
import article3Img from "./assets/images/article3.png";

// Componente em cclasse é uma classe que herda a classe Component do React,
// e retorna HTML dentro do metodo render()
class App extends React.Component {
  // metodo responsavel por renderizar o conteudo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius adipisci quo voluptatum nam vitae. Dolore eaque sed perspiciatis tenetur, fuga veritatis. Iure doloremque explicabo est, doloribus deleniti quas dolor!"
            thumbmail={article1Img}

          />

          <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius adipisci quo voluptatum nam vitae. Dolore eaque sed perspiciatis tenetur, fuga veritatis. Iure doloremque explicabo est, doloribus deleniti quas dolor!"
            thumbmail={article2Img} />

          <Article title="36 Days of Malayalam type" provider="Spaceflight Now" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius adipisci quo voluptatum nam vitae. Dolore eaque sed perspiciatis tenetur, fuga veritatis. Iure doloremque explicabo est, doloribus deleniti quas dolor!"
            thumbmail={article3Img} />

          <Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius adipisci quo voluptatum nam vitae. Dolore eaque sed perspiciatis tenetur, fuga veritatis. Iure doloremque explicabo est, doloribus deleniti quas dolor!" thumbmail={article1Img} />
        </section>
      </>
    );
  }
}

export default App;
