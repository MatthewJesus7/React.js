import {useState} from 'react'

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Nome: ${name} recebido!
        senha: ${password} recebida!`)
        console.log('Cadastro recebido!')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div style={{marginTop:'50px', backgroundColor: 'light-gray'}}>
            <form onSubmit={cadastrarUsuario}>
                <h2>Cadastro</h2>
                <div>
                    <label htmlFor="iname">
                        Nome:
                        <input 
                        type="text"
                        name="name" id="iname"
                        placeholder="Digite seu nome" 
                        onChange={
                            (e) => setName(e.target.value)
                        } 
                        />
                        
                    </label>
                </div>

                <div>
                    <label htmlFor="ipass">
                        Senha: 
                        <input
                        type="password"
                        name="pass" id="ipass" placeholder="Digite sua senha" 
                        onChange={
                            (e) => setPassword(e.target.value)
                        } 
                        />
                        </label>
                </div>

                <div>
                    <input
                    type="submit"
                    value="Cadastrar" />
                    </div>
            </form>
        </div>
    )
}

export default Form