import { useState } from "react"
import Button from "./Button"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }
    return (
        <>
        <h2>Cadastre o seu e-mail</h2>
        <form>
            <label htmlFor="imail">
                <input
                type="email"
                name="mail"
                id="imail"
                onChange={
                    (e) => setEmail(e.target.value)
                } 
                />
                </label>
        </form>
        <Button event={enviarEmail} text="Enviar E-mail">
        </Button>
        
        {userEmail && (
            <div>
                <p>o E-mail do usuario é: {userEmail}</p>
                <Button event={limparEmail} text="Limpar E-mail">
                </Button>
            </div>
        )}
        </>
    )
}

export default Condicional