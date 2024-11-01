import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Bem-vindo ao Algorithm Visualizer! (≧◡≦) ♡</h1>
      <p>Explore os algoritmos de ordenação clicando nas abas acima! (=^･ω･^=)</p>
      <p>Me siga nas minhas redes:</p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/mariliaborgo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn ✧(=^･ω･^=)✧
        </a>
        <a
          href="https://github.com/marilia-borgo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub  (=ↀωↀ=)
        </a>
      </div>
      <p className="footer">Obrigada por visitar! (•ω•)♡</p>
    </div>
  );
};

export default LandingPage;
