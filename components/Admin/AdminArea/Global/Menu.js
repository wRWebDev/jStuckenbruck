import firebase from '../../../../db/firebase'
const auth = firebase.auth()
import { listOfSections } from '../Sections'
import styles from './styles/adminHousestyle.module.css'


const Menu = ({ changeSection }) => {
    
    const closeMenu = () => {
        document.getElementById('adminMenu').classList.remove(styles.showing)
    }
    
    return (
        <div 
            className={styles.adminMenu}
            id="adminMenu"    
        >
            {/* Close button for mobile menu */}
            <div 
                className={styles.adminMenuCloseButton}
                onClick={()=>{closeMenu()}}
            >
                <div/><div/>
            </div>

            {/* Menu list */}
            <ul>
                
                {
                    listOfSections.map((section, i) => (
                        <li 
                            key={i}
                            onClick={()=>{
                                closeMenu()
                                changeSection(section.name)
                            }}
                        >
                            {section.name}
                        </li>
                    ))
                }

                {/* Sign out for mobile menu */}
                <li
                    className={styles.adminMenuSignOut}
                    onClick={() => auth.signOut()}
                >
                    Sign out
                </li>
            </ul>
        </div>
    )
}

export default Menu