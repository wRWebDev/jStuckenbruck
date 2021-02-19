import styles from './styles/button.module.css'

const Button = ({ clickHandler = Function, text = String, type = String }) => {
    return (
        <button 
            className={styles.adminButton}
            type={type ? type : 'button'}
        >   
            {text}
        </button>
    )
}

export default Button