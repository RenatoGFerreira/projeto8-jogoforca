import forca from "./assets/forca0.png"
import Botoes from "./Botoes.js"


export default function App() {
    return (
        <>
            <div className="conteudo">
                <div className="cenario">
                    <div>
                        <img src={forca} alt="imagem principal" className="img-principal" data-identifier="game-image" />
                    </div>
                    <div className="informacoes">
                        <div>
                            <button className="escolher-palavra" data-identifier="choose-word">Escolher Palavra</button>
                        </div>
                        <div className="palavra">
                            <p data-identifier="word">FORMAÇÃO DA PALAVRA</p>
                        </div>
                    </div>
                </div>
                <Botoes/>
                <div className="tentativas">
                    <p data-identifier="type-guess">Aqui vai vir o input</p>
                    <button className="botao-letras" data-identifier="guess-button">Chutar</button>
                </div>
            </div>
        </>
    )
}