import styles from './styles/adminHousestyle.module.css'
import firebase from '../../../../db/firebase'
const auth = firebase.auth()

const Header = ({ children }) => {
    return (
        <>
            <div className={styles.banner}>
                <img src="/wrwebdev.svg" />
                <div 
                    className={styles.menuButton}
                    onClick={() => document.getElementById('adminMenu').classList.add(styles.showing)}    
                >
                    <div />
                    <div />
                </div>
                <div 
                    className={styles.logOut}
                    onClick={() => {auth.signOut()}}    
                >
                    Sign Out
                </div>
            </div>
            { children }
        </>
    )
}

export default Header