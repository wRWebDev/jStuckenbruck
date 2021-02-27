import styles from '../styles/inputOverlay.module.css'
import OutsideClickHandler from 'react-outside-click-handler'
import { RemoveScroll } from 'react-remove-scroll'

const InputOverlay = ({ children, id = '', closeOverlay = Function, showing }) => {

    console.log("showing overlay", showing)

    return (
        <div 
            className={styles.pageCover}
            id={id}    
        >
            {
                !showing
                    ? ''
                    :   <OutsideClickHandler
                            onOutsideClick={() => {closeOverlay()}}
                        >
                            <RemoveScroll>
                                <div className={styles.overlay}>
                                    {children}
                                </div>
                            </RemoveScroll>
                        </OutsideClickHandler>
            }
        </div>
    )
}

export default InputOverlay