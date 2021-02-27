import styles from '../styles/inputOverlay.module.css'

const ArrayItem = ({ item = [], removeItem = Function, arrPosition = Number }) => {
    return (
        <div
            className={styles.item}
        >
            {/* Disply the first item of the array bold, 2nd item regular weight */}
            <strong>{item[0]}</strong> &nbsp; {item[1]}
            
            {/* Delete button */}
            <div 
                className={styles.deleteButton}
                onClick={()=>{removeItem(arrPosition)}}
            >
                x
            </div>
        </div>
    )
}

export default ArrayItem