/*
    Print the list of events
        - if the event has a type of 'year', show a year card
        - if the event has a type of 'event', show an event card
*/

import EventCard from './EventCard'
import YearCard from './YearCard'
import { nanoid } from 'nanoid'
import styles from './styles/events.module.css'
import { separatePerformances } from './separation'

const EventList = ({ events, future, openOverlay }) => {

    const fullEventList = separatePerformances(events, future)

    return (
        <div className={styles.listWrapper}>
            {
                fullEventList.map((card, i) =>
                    card.type === 'event'
                        ? <EventCard 
                            key={nanoid()}
                            details={card}
                            openOverlay={openOverlay}
                            index={i}
                        />
                        : <YearCard 
                            key={nanoid()}
                            year={card.year} 
                        />    
                )
            }
        </div>
    )
}

export default EventList