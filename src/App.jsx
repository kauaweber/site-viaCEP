import { useState } from "react";
import "./App.css";

function App() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);

  async function buscarCep() {
    const resposta = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    const resultado = await resposta.json();

    setDados(resultado);
  }

  return (
    <div className="container">
      <h1>Buscar CEP</h1>

      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={buscarCep}>Buscar</button>

      {dados && (
        <div>
          <p>Rua: {dados.logradouro}</p>
          <p>Bairro: {dados.bairro}</p>
          <p>Cidade: {dados.localidade}</p>
          <p>Estado: {dados.uf}</p>
          <p>CEP: {dados.cep}</p>
        </div>
      )}
    </div>
  );
}

export default App;