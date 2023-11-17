// React
import { useCallback, useEffect, useState } from 'react';

// CSS
import './App.css';

// Dados
import { listaPalavras } from './data/palavras';

// Componentes
import FimJogo from './components/FimJogo';
import Jogo from './components/Jogo';
import TelaInicial from "./components/TelaInicial";

const estagios = [
  {id: 1, nome: "inicio"},
  {id: 2, nome: "jogo"},
  {id: 3, nome: "fim"}
]

const qntTentativas = 3;

function App() {
  const [estagioJogo, setEstagioJogo] = useState(estagios[0].nome);
  const [palavras] = useState(listaPalavras);

  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letras, setLetras] = useState([]);

  const [advinharLetras, setAdvinharLetras] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas , setTentativas] = useState(3);
  const [pontuacao, setPontuacao] = useState(0);

  // escolhe a categoria aleatoria
  const escolhePalavraECategoria = useCallback(() => {
    const categorias = Object.keys(palavras);
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)];

    console.log(categoria);
  
    // escolhe a palavra aleatoria
    const indicePalavra = Math.floor(Math.random() * palavras[categoria].length);
    const palavra = palavras[categoria][indicePalavra];

    console.log(palavra);

    return {palavra, categoria};
  }, [palavras])

  // Iniciar o jogo
  const iniciarJogo = useCallback(() => {
    // limpar todas as letras
    limparTodosEstados();
    // escolhe a palavra e escolha a categoria
    const {palavra, categoria} = escolhePalavraECategoria();

    // criar array de letras
    let letrasPalavra = palavra.split("");

    letrasPalavra = letrasPalavra.map((l) => l.toLowerCase());

    console.log(palavra,categoria);
    console.log(letrasPalavra);

    // setar os estados
    setPalavraEscolhida(palavra);
    setCategoriaEscolhida(categoria);
    setLetras(letrasPalavra);


    setEstagioJogo(estagios[1].nome);
  }, [escolhePalavraECategoria]);

  // Processar as letras do input
  const verificarLetra = (letra) => {
    const normalizarLetra = letra.toLowerCase();

    // verifica se a letra ja foi utilizada
    if(advinharLetras.includes(normalizarLetra) || letrasErradas.includes(normalizarLetra)){
      return;
    }

    if(letras.includes(normalizarLetra)){
      setAdvinharLetras((atualAdvinharLetras) => [
        ...atualAdvinharLetras,normalizarLetra,
      ])
    }else{
      setLetrasErradas((atualLetrasErradas) => [
        ...atualLetrasErradas,normalizarLetra,
      ]);

      setTentativas((atualTentativas) => atualTentativas - 1);
    }
  };

    const limparTodosEstados = () => {
      setAdvinharLetras([]);
      setLetrasErradas([]);
    }

    //checar game over
    useEffect(() => {
        if(tentativas <= 0) {
          // resetar todos os estados
          limparTodosEstados()

          setEstagioJogo(estagios[2].nome);
        }
    }, [tentativas])

    //checar a vitoria
    useEffect(() => {

      const letrasUnicas = [... new Set(letras)];

      // condicao de vitoria
      if(advinharLetras.length === letrasUnicas.length){
        // adc pontuacao
        setPontuacao((atualPontuacao) => atualPontuacao += 100);

        // reinicar o jogo
        iniciarJogo();
      }

      console.log(letrasUnicas);

    }, [advinharLetras, letras, iniciarJogo]);
  
  // Reiniciar o jogo
  const reiniciar =() => {
    setPontuacao(0);
    setTentativas(qntTentativas);

    setEstagioJogo(estagios[0].nome);
  }

  return (
    <div className='App'>
      {estagioJogo === 'inicio' && <TelaInicial iniciarJogo={iniciarJogo}/>}
      {estagioJogo === 'jogo' && (<Jogo
                                      verificarLetra={verificarLetra}
                                      palavraEscolhida={palavraEscolhida}
                                      categoriaEscolhida={categoriaEscolhida}
                                      letras={letras}
                                      advinharLetras={advinharLetras}
                                      letrasErradas={letrasErradas}
                                      tentativas = {tentativas}
                                      pontuacao = {pontuacao}
                                      />
                                      )}
      {estagioJogo === 'fim' && <FimJogo reiniciar={reiniciar} pontuacao={pontuacao}/>}
    </div>
  )
}

export default App
