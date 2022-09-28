import palavras from "./palavras.js"
import alfabeto from "./alfabeto.js"
import forca from "./forca.js"
import { useState } from "react"


export default function App() {

    const [corPalavra, setCorPalavra] = useState("normal")
    const [desativaInput, setDesativaInput] = useState(true)
    const [errou, setErrou] = useState(0)
    const [palavraChave, setPalavraChave] = useState([])
    const [palavraEscondida, setPalavraEscondida] = useState([])
    const [letrasUsadas, setLetrasUsadas] = useState([alfabeto])
    const [palavraEspecial, setPalavraEspecial] = useState("")
    const [chute, setChute] = useState("")


    function iniciarGame(){
        setDesativaInput(false)
        setLetrasUsadas([])
        escolhePalavra()
        setErrou(0)
        setChute("")
        setCorPalavra("normal")
    }

    function finalizaGame(){
        setPalavraEscondida(palavraChave)
        setLetrasUsadas(alfabeto)
        setDesativaInput(true)
        setChute("")
        console.log('THE END')
    }

    //function chuteInput(){
    //    if(palavraChave == chute){
    //        console.log("acertou")
    //    }else{
    //        console.log('perdeu')
    //    }   
    //}

    function chuteInput(){
        let palavraChute = ""
        palavraChave.forEach((letra) => palavraChute += letra)

        if(palavraChute === chute){
            setCorPalavra("acerto")
        }else{
            setErrou(6)
            setCorPalavra("erro")
        }
        finalizaGame()
    }

    // const texto = texto.replace(/[ÁÃÀ]/, "A");

    function escolhePalavra(){
        const numeroAleatorio = Math.floor(Math.random() * palavras.length)
        const palavraEscolhida = palavras[numeroAleatorio]
        const arrayPalavra = palavraEscolhida.split("")
        setPalavraChave(arrayPalavra)
        console.log(palavraEscolhida)                                           // <----------- TA AQUI A PALAVRA DO JOGO

        let traco = []

        arrayPalavra.forEach((letra => traco.push(' _ ')))
        setPalavraEscondida(traco)

        //const palavraFormatada = palavraEscolhida.replace(/[^a-zA-Z\s]/g, "a")
        const palavraFormatada = palavraEscolhida.normalize("NFD").replace(/[^a-z\s]/g, "");
        setPalavraEspecial(palavraFormatada)

    }

    function letraClicada(letra){
        setLetrasUsadas([...letrasUsadas, letra])
        if(palavraEspecial.includes(letra)){
            acertouLetra(letra)
        }else{
            errouLetra(letra)
        }
    }

    function acertouLetra(l){
        const palavraDinamica = [...palavraEscondida]
        
        palavraChave.forEach((letra, indice) => {
            if(palavraEspecial[indice] === l){
                palavraDinamica[indice] = letra
            }
        })
        setPalavraEscondida(palavraDinamica)

        if(!palavraDinamica.includes(" _ ")){
            setCorPalavra("acerto")
            finalizaGame()
        }
    }


    function errouLetra(l){
        const totErros = errou+1
        setErrou(totErros)

        if(totErros === 6){
            setCorPalavra("erro")
            finalizaGame()

        }
    }

    return (
        <>
            <div className="conteudo">
                <div className="cenario">
                    <div>
                        <img src={forca[errou]} alt="imagem principal" className="img-principal" data-identifier="game-image" />
                    </div>
                    <div className="informacoes">
                        <div>
                            <button onClick={iniciarGame} className="escolher-palavra" data-identifier="choose-word">Escolher Palavra</button>
                        </div>
                        <div className="palavra">
                            <h1 className={corPalavra} data-identifier="word">{palavraEscondida}</h1>
                        </div>
                    </div>
                </div>
                <div className="botoes">
                    {alfabeto.map((letra, index) => (
                        <button
                            onClick={() => letraClicada(letra)}
                            key ={index}
                            disabled={letrasUsadas.includes(letra)}
                            data-identifier="letter"
                            className="botao-letras"
                        >
                            {letra.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div className="tentativas">
                    <span>Já sei a palavra! &#128540;</span>
                    <input value={chute} onChange={(e) => setChute(e.target.value)} disabled={desativaInput} className="input-tentativa" data-identifier="type-guess" />
                    <button onClick={chuteInput} disabled={desativaInput} className="botao-letras" data-identifier="guess-button">Chutar</button>
                </div>
            </div>
        </>
    )
}