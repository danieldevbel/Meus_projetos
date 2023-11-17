import './FimJogo.css';

const FimJogo = ({reiniciar, pontuacao}) => {
    return (
        <div>
            <h1>Fim de Jogo!</h1>
            <h2>A sua pontuação foi: <span>{pontuacao}</span></h2>
            <button onClick={reiniciar}>Resetar Jogo</button>
        </div>
    )
}

export default FimJogo