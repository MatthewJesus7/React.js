import Button from "./Button"

function Evento() {
    function meuEvento() {
        console.log(`Parece que fui ativado!`)
    }

    function segundoEvento() {
        console.log(`Fui ativado Novamente!`)
    }
    return(
        <>
        <h1>Clique para disparar um evento</h1>
        <Button event={meuEvento} text="Primeiro evento"></Button>
        <Button event={segundoEvento} text="Segundo evento"></Button>
        </>
    )
}

export default Evento
