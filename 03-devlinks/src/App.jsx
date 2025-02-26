import "./App.css";
import fotolight from "./img/WhatsApp Image 2025-01-29 at 07.39.53.jpeg";
import fotodark from "./img/images.png"

import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/socialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
const [isLight,setIsLight] = useState(true);

const troca = () => {
  setIsLight((anterior) => !anterior);
};


  return (
    <>
      <div id="App" className={isLight ? "light" : ""}>
        <Perfil fotoPerfil={isLight ? fotolight : fotodark}>@NewLivia</Perfil>

        <Switch troca={troca} isLight={isLight} />
        <div id="container">
        <ul>
          <Links link={"https://github.com/L1vias"}> GitHub</Links>
          <Links link={"https://instagram.com/"}>Instagram</Links>
          <Links link={"https://github.com/L1vias"}>Portifólio</Links>
          <Links link={"https://github.com/L1vias"}>Projetos</Links>
        
        </ul>
</div>
        <div id="socialLinks">
          <SocialLinks  
          link={"https://github.com/L1vias"}
          icon={"logo-github"}
          />
          <SocialLinks 
          link={"https://instagram.com/"}
          icon={"logo-instagram"}
          />
          <SocialLinks
          link={"https://youtube.com"}
          icon={"logo-youtube"}
           />
          <SocialLinks 
          link={"https://linked.in"}
          icon={"logo-linkedin"}
          />
        </div>
        <Rodape>Livia</Rodape>/
      </div>
    </>
  );
};

export default App;
