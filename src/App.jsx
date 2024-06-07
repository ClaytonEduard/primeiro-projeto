import React from 'react'

import logoImg from './assets/images/logo.png'

import './styles/App.css'

// Componente em cclasse é uma classe que herda a classe Component do React,
// e retorna HTML dentro do metodo render()
class App extends React.Component {
  // metodo responsavel por renderizar o conteudo HTML do nosso componente
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt='' width={80} />
            <h1>Space Flight News</h1>
          </div>

          <ul className="nav-list">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Trending</a></li>
            <li><a href='#'>Categories</a></li>
            <li><a href='#'>About us</a></li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default App;
