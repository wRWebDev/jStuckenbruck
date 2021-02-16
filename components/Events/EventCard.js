import styles from './styles/events.module.css'

const formatDate = seconds => new Date(seconds * 1000).toLocaleDateString('en-GB', {
    weekday: undefined,
    year: undefined,
    month: 'short',
    day: 'numeric',
})

const EventCard = ({ details, openOverlay, index }) => {

    const composers = details.repertoire.reduce((acc, curr) => [...acc, curr.composer], [])

    return (
        <div className={styles.eventCard}>
            <div className={styles.eventCardInner}>
                <div 
                    className={styles.cardFront}
                    style={ index % 3 === 1 ? {background: '#a92626', color: '#fff'} : {} }
                >
                    <h4>{formatDate(details.performanceDate)}</h4>
                    <h3>{details.institution}</h3>
                    <h4>{details.status}</h4>
                </div>
                <div className={styles.cardBack}>
                    <h4>{formatDate(details.performanceDate)}</h4>
                    <h3>{composers.join(' / ')}</h3>
                    <button 
                        onClick={() => openOverlay(details)}
                    >
                        Read more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EventCard