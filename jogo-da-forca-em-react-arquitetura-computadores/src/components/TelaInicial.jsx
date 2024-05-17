import './TelaInicial.css';

const TelaInicial = ({ iniciarJogo }) => {
    return (
      <div>
        <h1>Bem-vindo ao Jogo da Forca!</h1>
        <button onClick={iniciarJogo}>Começar Jogo</button>
      </div>
    );
  };
  
  export default TelaInicial;
  
  
  
