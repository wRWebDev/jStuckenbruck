import styles from '../../Global/styles/adminHousestyle.module.css'
import { Card, NewItem } from '../../../Cards'
import firebase from '../../../../../db/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const convertDate = date => (new Date(date).toLocaleDateString('en-GB', { 
    day: 'numeric',
    month: 'short',
    year: '2-digit'
}))

const EventSelect = ({ changeSection }) => {

    const [ events ] = useCollectionData(
        firebase.firestore().collection('schedule').orderBy('startDate', 'desc'),
        {
            idField: 'id'
        }
    )

    const addEvent = () => {
        console.log('running addEvent()...')        
    }

    const editEvent = id => {
        console.log('Trying to navigate to ', id)
        changeSection('Schedule Edit', id)
    }

    return (
        <>
            <h1>Schedule</h1>
            <h2>Select an event to edit</h2>
            <div className={styles.userInterface}>
                
                {

                    !events 
                        ? 'Loading events...'
                        : <>
                            <NewItem action={addEvent} />
                            {
                                events.map((event, i) => {
                                    let dates = event.startDate.seconds === event.endDate.seconds
                                        ? convertDate(event.startDate.seconds * 1000)
                                        : `From\n${convertDate(event.startDate.seconds * 1000)}`
                                    return (
                                        <Card 
                                            key={i}
                                            id={event.id}
                                            title={event.institution}
                                            subtitle={dates}
                                            action={editEvent}
                                        />
                                    )
                                })
                            }
                        </>

                }
                                
            </div>
        </>
    )
}

export default EventSelect