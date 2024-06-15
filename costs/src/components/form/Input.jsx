import styles from './Input.module.css'

function Input({type, text, name, id, placeholder, handleOnChange, value }) {
    return(
        <div className={styles.form_control}>
            
            <label htmlFor={id}> {text}

                <input type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}/>
            </label>
        </div>
    )
}

export default Input