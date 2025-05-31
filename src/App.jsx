import { useState } from "react";
import "./App.modules.css";

import InputBusca from './components/Buscar/inputBusca';
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const handleBlur = (e) => {
    console.log('Blur detectado! Valor do input:', e.target.value);
    setNomeUsuario(e.target.value);
  };

  return(
    <>
    <div className="container">
      <InputBusca
        placeholder="Digite o nome do usuário e clique fora do campo de busca"
        onBlur={handleBlur}/>
    </div>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App;
