import styles from './styles/textInput.module.css'

const TextyInput = ({ 
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
            <textarea 
                name={name}
                value={value}
                onChange={changeHandler}
                placeholder={placeholder}
                autoComplete={autoComplete}
                rows={20}
            />
        </label>
    )
}

export default TextyInput