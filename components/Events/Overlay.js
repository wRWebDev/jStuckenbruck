import styles from './styles/events.module.css'

const Overlay = ({ details = Object }) => {

    if(!Object.keys(details).includes('repertoire')){
        details.repertoire = []
    }

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
                <span className={styles.overlayItalic}>{new Date(details.performanceDate * 1000).toLocaleDateString('en-GB', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })}</span>
                <span className={styles.overlayItalic}>{details.location}</span>
                <h1>
                    {details.institution}
                    <span />
                </h1>
                <ul>
                    {
                        details.repertoire.length
                            ? details.repertoire.map((item, i) => (
                                <li key={i}><strong>{item.composer}</strong> - {item.work}</li>
                            ))
                            : ''
                    }
                </ul>
                {
                    details.soloist 
                        ? <span className={styles.overlayItalic}>
                            {details.soloist}
                        </span>
                        : ''
                }
                {
                    details.status
                        ? <div className={styles.overlayStatus}>
                            {details.status}
                        </div>
                        : ''
                }
            </div>
        </div>

    )
}

export default Overlay