import PropTypes from 'prop-types'

function Pessoa({nome, idade, profissão, foto}) {
    return (
        <>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissão}</p>
        </>
    )
}

Pessoa.propTypes = {
    nome: PropTypes.string
}

export default Pessoa