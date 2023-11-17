import './telaInicial.css';

const TelaInicial = ({iniciarJogo}) => {
    return (
        <div className='start'>
            <h1>Palavra Secreta</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={iniciarJogo}>Começar o jogo</button>
        </div>
    )
}

export default TelaInicial;