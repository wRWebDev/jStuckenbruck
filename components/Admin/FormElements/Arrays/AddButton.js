import styles from '../styles/inputOverlay.module.css';

const AddButton = ({ action }) => {
    return (
        <button
            type="button"
            onClick={action}
            className={styles.addButton}
        >
            +
        </button>
    )
}

export default AddButton