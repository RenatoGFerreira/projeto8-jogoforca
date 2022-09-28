/* const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


export default function BotoesLetras() {
    return (
        <div className="botoes">
            {alfabeto.map((letra, index) => (
                <button
                    onClick={() => letraClicada(letra)}
                    key={index}
                    disabled={letrasUsadas.includes(letra)}
                    data-identifier="letter"
                    className="botao-letras"
                >
                    {letra.toUpperCase()}
                </button>
            ))}
        </div>
    )
} */