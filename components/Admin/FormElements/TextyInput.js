import styles from './styles/textInput.module.css'

const TextyInput = ({ 
    type = String,
    changeHandler = Function, 
    value = String,
    name = String,
    label = String,
    placeholder = String,
    autoComplete = String 
}) => {
    return (
        <label className={styles.adminTextInput}>
            {label}
            <input 
                type={type}
                name={name}
                value={value}
                onChange={changeHandler}
                placeholder={placeholder}
                autoComplete={autoComplete}
            />
        </label>
    )
}

export default TextyInput