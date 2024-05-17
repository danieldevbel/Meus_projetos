import './FimJogo.css';

const FimJogo = ({ reiniciar, pontuacao }) => {
    return (
      <div>
        <h1>Fim de Jogo!</h1>
        <p>Sua pontuação final foi: {pontuacao}</p>
        <button onClick={reiniciar}>Reiniciar Jogo</button>
      </div>
    );
  };
  
  export default FimJogo;
  
  
