import styles from './styles/textInput.module.css'

const TextyInput = ({ 
    type = '',
    changeHandler = Function, 
    value = '',
    name = '',
    label = '',
    placeholder = '',
    autoComplete = '' 
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