/*
    Event Card
        - This is the square that flips over
        - Contains minimal info about the event
        - Contains a CTA to open the overlay with more info
        - 32: Make seemingly random tiles the theme colour
            - TODO: 
                [ ] Derive theme colour from average colour of the background image
                [ ] Make the coloured in tiles actually random
*/

import styles from './styles/events.module.css'

/* Formats date to e.g. 20 Feb */
const formatDate = seconds => new Date(seconds * 1000).toLocaleDateString('en-GB', {
    weekday: undefined,
    year: undefined,
    month: 'short',
    day: 'numeric',
})

const EventCard = ({ details, openOverlay, index }) => {

    /* 
        Make an array of just composers names from the repertoire list 
        details.repertoire = [{composer: String, work: String}, {...}]
    */
    const composers = details.repertoire.reduce((acc, curr) => [...acc, curr.composer], [])

    return (
        <div className={styles.eventCard}>
            <div className={styles.eventCardInner}>
                <div 
                    className={styles.cardFront}
                    style={ (index % 7 === 2 || index % 9 === 5) ? {background: '#a92626', color: '#fff'} : {} }
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