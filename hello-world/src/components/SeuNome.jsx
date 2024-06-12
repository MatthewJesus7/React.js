function SeuNome({ setNome }) {
    return(
        <div>
            <label htmlFor="inome">
                Nome:
                <input type="text"
                name="nome"
                id="inome"
                placeholder="Digite seu nome" 
                onChange={(e) => setNome(e.target.value)}/>
            </label>
        </div>
    )
}

export default SeuNome