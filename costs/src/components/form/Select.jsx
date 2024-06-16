import styles from './Select.module.css'

function Select({ text, name, id, options, handleOnChange, value }) {
    return(
        <div className={styles.form_control}>
            
            <label htmlFor={id}> {text}

                <select
                name={name}
                id={id}
                onChange={handleOnChange}
                value={value || ''}>
                    {options.map((option) => (
                        <option
                        value={option.id}
                        key={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default Select