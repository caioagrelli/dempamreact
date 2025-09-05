// frontend/src/App.jsx

import React from 'react';
import './App.css'; // Importa nosso arquivo de estilos CSS
import logoMppe from './assets/images/logo_mppe.png'; // Importa a imagem do logo

function App() {
  // A função retorna o código JSX (que parece HTML) que será exibido na tela
  return (
    // Note que no JSX usamos "className" em vez de "class" para o CSS
    <div className="container-homepage">
      
      <header className="header-homepage">
        <img src={logoMppe} alt="Logo Ministério Público de Pernambuco" />
        <p>Ministério Público de Pernambuco</p>
      </header>

      <main className="main-content">
        <h1>SEJA BEM VINDO AO SITE DO DEMPAM!</h1>
        
        <div className="button-group">
          {/* Por enquanto, os links não levam a lugar nenhum */}
          <a href="#" className="btn btn-solicitante">SOLICITANTE</a>
          <a href="#" className="btn btn-admin">ADMINISTRATIVO</a>
        </div>
      </main>
      
    </div>
  );
}

export default App;