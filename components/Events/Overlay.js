import styles from './styles/events.module.css'

const Overlay = ({ details }) => {
    return (
        <div
            className={styles.overlayWrapper}
            id="eventOverlay"
        >
            <div 
                className={styles.overlayCloseButton}
                onClick={()=>{document.getElementById('eventOverlay').style.top = '150%'}}
            >
                <div />
                <div />
            </div>
            <div className={styles.overlayInfo}>
                <span className={styles.overlayDate}>{new Date(details.performanceDate * 1000).toLocaleDateString('en-GB')}</span>
                <span className={styles.overlayLocation}>{details.location}</span>
                <h1>{details.institution}</h1>
            </div>
        </div>

    )
}

export default Overlay