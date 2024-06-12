function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
    return `olá ${algumNome}`
    }
    return (
    <>
    <p>{gerarSaudacao(nome)}</p>
    </>
)
}

export default Saudacao