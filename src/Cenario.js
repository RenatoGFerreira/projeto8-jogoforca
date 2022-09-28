/* import React from "react"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"


export default function Cenario() {

    const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

    const [palavra, setPalavra] = React.useState([])
    const [escondido, setEscondido] = React.useState("")
    //const [erros, setErros] = React.useState(0)

    console.log(`Array palavra real: ${palavra}`)
    console.log(`escondido: ${escondido}`)
    //console.log(`total de erros ${erros}`)

    

    function sortearPalavra(){

        const palavras = [
            "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abraço", "ábaco", "abrigo", "abrir", 
            "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco", 
            "caixa", "chantilly", "comércio", "cachorro", "cuidado", "caneta", "carinho", "cupuaçu", "cabra", "cesto", 
            "dados", "dizer", "danone", "dente", "diário", "diamante", "diafragma", "detonar", "dia", "dromedário", 
            "elefante", "esmeralda", "espátula", "estômago", "esfinge", "esfera", "encontro", "ema", "escola", "economia", 
            "formiga", "fama", "festa", "fiador", "ferver", "flauta", "fichário", "figo", "fiapo", "fotografia", 
            "goiaba", "gelo", "grito", "gamão", "guria", "goleiro", "golfinho", "golfe", "girar", "glúten", 
            "helicóptero", "harmonia", "haste", "hectare", "hábito", "hepatite", "hiena", "hemisfério", "hidrante",
            "igreja", "ícone", "importante", "ímpar", "idoso", "irado", "identidade", "idioma", "idade", "idiota", 
            "jantar", "jumento", "jambú", "jibóia", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco", 
            "laranja", "lua", "leão", "limão", "larápio", "luz", "lindo", "lacraia", "lactose", "laço", "lacrar", 
            "mamão", "manga", "morango", "mico", "matar", "mingau", "moqueca", "macacão", "mocassin", "maçaneta", 
            "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nádega", "nabo", 
            "ovo", "ostra", "obstetra", "oblíquo", "orangotango", "olhar", "óculos", "ortodoxo", "ouro", "ornamento", 
            "pato", "polvo", "povoar", "pólvora", "palhaço", "paróqia", "pano", "princesa", "pizza", "patroa", 
            "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar", "quarteirão", 
            "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura", 
            "salada", "salamandra", "sacola", "siri", "sábado", "safanão", "sabre", "sucarose", "sabedoria", "sacerdote", 
            "tatu", "tabacaria", "taberneiro", "tábua", "torrada", "três", "terço", "tamanho", "tatuagem", "trem", 
            "uva", "uísque", "união", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir", 
            "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa", 
            "xícara", "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale", 
            "zebra", "zagueiro", "zero", "zoeira", "zodíaco", "zangão", "zepelim", "zinco", "zoológico", "zumbido"
        ]

        let sorteado = palavras[Math.floor(Math.random()*palavras.length)]
        console.log(`sorteado: ${sorteado}`)
        
        
        setPalavra(sorteado.split(""))
        setEscondido([...Array(sorteado.length).fill('_')])
    }


    return (
        <div className="cenario">
            <div>
                <img src={imagens[0]} alt="imagem principal" className="img-principal" data-identifier="game-image" />
            </div>
            <div className="informacoes">
                <div>
                    <button onClick={sortearPalavra} className="escolher-palavra" data-identifier="choose-word">Escolher Palavra</button>
                </div>
                <div className="palavra">
                    <p className="word" data-identifier="word">_ _ _ _ _ _</p>
                </div>
            </div>
        </div>
    )
} */