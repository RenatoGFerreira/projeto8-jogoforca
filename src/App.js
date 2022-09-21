import forca from "./assets/forca0.png"

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
                <div className="botoes">
                    <button data-identifier="letter" className="botao-letras">A</button>
                    <button data-identifier="letter" className="botao-letras">B</button>
                    <button data-identifier="letter" className="botao-letras">C</button>
                    <button data-identifier="letter" className="botao-letras">D</button>
                    <button data-identifier="letter" className="botao-letras">E</button>
                    <button data-identifier="letter" className="botao-letras">F</button>
                    <button data-identifier="letter" className="botao-letras">G</button>
                    <button data-identifier="letter" className="botao-letras">H</button>
                    <button data-identifier="letter" className="botao-letras">I</button>
                    <button data-identifier="letter" className="botao-letras">J</button>
                    <button data-identifier="letter" className="botao-letras">K</button>
                    <button data-identifier="letter" className="botao-letras">L</button>
                    <button data-identifier="letter" className="botao-letras">M</button>
                    <button data-identifier="letter" className="botao-letras">N</button>
                    <button data-identifier="letter" className="botao-letras">O</button>
                    <button data-identifier="letter" className="botao-letras">P</button>
                    <button data-identifier="letter" className="botao-letras">Q</button>
                    <button data-identifier="letter" className="botao-letras">R</button>
                    <button data-identifier="letter" className="botao-letras">S</button>
                    <button data-identifier="letter" className="botao-letras">T</button>
                    <button data-identifier="letter" className="botao-letras">U</button>
                    <button data-identifier="letter" className="botao-letras">V</button>
                    <button data-identifier="letter" className="botao-letras">W</button>
                    <button data-identifier="letter" className="botao-letras">X</button>
                    <button data-identifier="letter" className="botao-letras">Y</button>
                    <button data-identifier="letter" className="botao-letras">Z</button>
                </div>
                <div className="tentativas">
                    <p data-identifier="type-guess">Aqui vai vir o input</p>
                    <button className="botao-letras" data-identifier="guess-button">Chutar</button>
                </div>
            </div>
        </>
    )
}