

export default function Botoes() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="botoes">
            {alfabeto.map((letra, index) => (
                <button key={index} data-identifier="letter" className="botao-letras" disabled="">{letra.toUpperCase()}</button>
            ))}
        </div>
    )
}