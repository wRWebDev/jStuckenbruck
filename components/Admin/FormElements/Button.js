import styles from './styles/button.module.css'

const Button = ({ 
    clickHandler = Function, 
    text = 'Save Changes', 
    type = 'button', 
    accessKey = "",
    disabled = false
}) => {
    return (
        <button 
            className={styles.adminButton}
            type={type}
            onClick={clickHandler}
            accessKey={accessKey}
            disabled={disabled}
            style={
                /(delete)|(remove)/gi.test(text)
                    ? { background: '#8e0c0f', color: '#fff' }
                    : { background: '#fff', color: '#000' }
            }
        >   
            {
                text
            }
        </button>
    )
}

export default Button