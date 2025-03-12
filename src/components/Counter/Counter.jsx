import React, { useState } from "react";

export function Counter() {
  const [contador, setContador] = useState(0);
  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "20px",
      }}
    >
      <div>
        <h1>{contador}</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          Diminiur
        </button>
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Aumentar
        </button>
      </div>

      {/* <form style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Nome"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={this.state.password}
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <button>Enviar</button>
      </form> */}
    </div>
  );
}
