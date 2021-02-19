import styles from '../../Global/styles/adminHousestyle.module.css'
import { Card, NewItem } from '../../../Cards'
import firebase from '../../../../../db/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const convertDate = date => (new Date(date).toLocaleDateString('en-GB'))

const EventSelect = () => {

    const [ events ] = useCollectionData(
        firebase.firestore().collection('schedule').orderBy('endDate', 'desc'),
        {
            idField: 'id'
        }
    )

    console.log(events)

    return (
        <>
            <h1>Schedule</h1>
            <h2>Select an event to edit</h2>
            <div className={styles.userInterface}>
                
                {

                    !events 
                        ? 'Loading events...'
                        : <>
                            <NewItem />
                            {
                                events.map((event, i) => (
                                    <Card 
                                        key={i}
                                        title={event.institution}
                                        subtitle={`${convertDate(event.startDate.seconds * 1000)} - ${convertDate(event.endDate.seconds * 1000)}`}
                                    />
                                ))
                            }
                        </>

                }
                                
            </div>
        </>
    )
}

export default EventSelect