
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {
  const [contador, setContador] = useState(3);
  const handleAddCarrinho = () => {
    setContador(contador + 1);
  }
  return (
    <>
      <Header contadorJogos={2} />
      < Promotion 
      onAddCarrinho={handleAddCarrinho}  />
    </>
  );
}

export default App;
