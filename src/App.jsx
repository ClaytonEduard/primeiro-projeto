import React from 'react'


import './styles/App.css'
import Navbar from './components/Navbar/Navbar';

// Componente em cclasse é uma classe que herda a classe Component do React,
// e retorna HTML dentro do metodo render()
class App extends React.Component {
  // metodo responsavel por renderizar o conteudo HTML do nosso componente
  render() {
    return (
      <Navbar />
    );
  }
}

export default App;
