import { useRef, useState } from 'react';
import './Jogo.css';

const Jogo = ({verificarLetra,
                palavraEscolhida,
                categoriaEscolhida,
                letras,
                advinharLetras,
                letrasErradas,
                tentativas,
                pontuacao}) => {

        const [letra, setLetra] = useState('');
        const letraInputRef = useRef(null);

        const handleSubmit = (e) => {
            e.preventDefault();

            verificarLetra(letra);

            setLetra("");

            letraInputRef.current.focus();
        }

    return (
        <div className="game">
            <p className="points">
                <span>Pontuação: {pontuacao}</span>
            </p>
            <h1>Advinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{categoriaEscolhida}</span>
            </h3>
            <p>Você ainda tem {tentativas} tentativa(s).</p>
            <div className="wordContainer">
                {letras.map((letra, i) => (
                    advinharLetras.includes(letra) ? (
                        <span key={i} className="letter">{letra}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                ))}
            </div>
            <div className="letterContainer">
                <p>Tente advinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='letter' maxLength="1" required onChange={(e) => setLetra(e.target.value)} value={letra} ref={letraInputRef}/>
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras Já utilizadas</p>
                {letrasErradas.map((letra, i) => (
                    <span key={i}>{letra}, </span>
                ))}
            </div>
        </div>
    )
}

export default Jogo