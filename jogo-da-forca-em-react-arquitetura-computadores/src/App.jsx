import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import FimJogo from './components/FimJogo';
import Jogo from './components/Jogo';
import TelaInicial from "./components/TelaInicial";
import { listasDePalavras } from './data/palavras';

const estagios = [
  { id: 1, nome: "inicio" },
  { id: 2, nome: "jogo" },
  { id: 3, nome: "fim" }
];

const qntTentativas = 3;

function App() {
  const [estagioJogo, setEstagioJogo] = useState(estagios[0].nome);
  const [listaEscolhida, setListaEscolhida] = useState([]);
  const [palavraIndex, setPalavraIndex] = useState(0);
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [dicaEscolhida, setDicaEscolhida] = useState("");
  const [letras, setLetras] = useState([]);
  const [advinharLetras, setAdvinharLetras] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(qntTentativas);
  const [pontuacao, setPontuacao] = useState(0);

  const limparTodosEstados = () => {
    setAdvinharLetras([]);
    setLetrasErradas([]);
    setTentativas(qntTentativas);
  };

  const iniciarJogo = useCallback(() => {
    const listaAleatoria = listasDePalavras[Math.floor(Math.random() * listasDePalavras.length)];
    setListaEscolhida(listaAleatoria);
    setPontuacao(0);
    setPalavraIndex(0);
    setEstagioJogo(estagios[1].nome); // Alteração para iniciar no estágio do jogo (estágio 2)
  }, []);

  useEffect(() => {
    iniciarJogo(); // Inicia o jogo quando o componente App montar
  }, []); // Sempre que o componente montar

  useEffect(() => {
    if (estagioJogo === estagios[0].nome && listaEscolhida.length > 0) {
      setEstagioJogo(estagios[1].nome); // Mudança para o estágio do jogo após a seleção da lista de palavras
    }
  }, [estagioJogo, listaEscolhida]);

  useEffect(() => {
    if (estagioJogo === estagios[1].nome && listaEscolhida.length > 0 && palavraIndex < listaEscolhida.length) {
      limparTodosEstados();
      const { palavra, dica } = listaEscolhida[palavraIndex];
      const letrasPalavra = palavra.split("").map((l) => l.toLowerCase());
      setPalavraEscolhida(palavra);
      setDicaEscolhida(dica);
      setLetras(letrasPalavra);
    } else if (estagioJogo === estagios[1].nome && palavraIndex >= listaEscolhida.length) {
      setEstagioJogo(estagios[2].nome); // Mudança para o estágio de fim quando todas as palavras forem adivinhadas
    }
  }, [estagioJogo, palavraIndex, listaEscolhida]);

  const verificarLetra = (letra) => {
    const normalizarLetra = letra.toLowerCase();
    if (advinharLetras.includes(normalizarLetra) || letrasErradas.includes(normalizarLetra)) {
      return;
    }
    if (letras.includes(normalizarLetra)) {
      setAdvinharLetras((atualAdvinharLetras) => [...atualAdvinharLetras, normalizarLetra]);
    } else {
      setLetrasErradas((atualLetrasErradas) => [...atualLetrasErradas, normalizarLetra]);
      setTentativas((atualTentativas) => atualTentativas - 1);
    }
  };

  useEffect(() => {
    if (tentativas <= 0) {
      limparTodosEstados();
      setEstagioJogo(estagios[2].nome);
    }
  }, [tentativas]);

  useEffect(() => {
    const letrasUnicas = [...new Set(letras)];
    if (advinharLetras.length === letrasUnicas.length && letrasUnicas.length > 0) {
      setPontuacao((atualPontuacao) => atualPontuacao + 100);
      setPalavraIndex((atualIndex) => atualIndex + 1); // Avançar para a próxima palavra
    }
  }, [advinharLetras, letras]);

  const reiniciar = () => {
    setListaEscolhida([]); // Limpar a lista de palavras escolhida
    limparTodosEstados(); // Limpar outros estados
    setPalavraIndex(0); // Reiniciar o índice da palavra
    iniciarJogo(); // Iniciar o jogo novamente
  };

  return (
    <div className='App'>
      {estagioJogo === 'inicio' && <TelaInicial iniciarJogo={iniciarJogo} />}
      {estagioJogo === 'jogo' && (
        <Jogo
          verificarLetra={verificarLetra}
          palavraEscolhida={palavraEscolhida}
          dicaEscolhida={dicaEscolhida}
          letras={letras}
          advinharLetras={advinharLetras}
          letrasErradas={letrasErradas}
          tentativas={tentativas}
          pontuacao={pontuacao}
        />
      )}
      {estagioJogo === 'fim' && <FimJogo reiniciar={reiniciar} pontuacao={pontuacao} />}
    </div>
  );
}

export default App;
