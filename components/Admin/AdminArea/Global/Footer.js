import styles from './styles/adminHousestyle.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a
                href="https://wrweb.dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                &copy; Will Robertson - @wRWeb.dev
            </a>
        </div>
    )
}

export default Footer