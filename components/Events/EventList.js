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
                fullEventList.map(card =>
                    card.type === 'event'
                        ? <EventCard 
                            key={nanoid()}
                            details={card}
                            openOverlay={openOverlay}
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