import styles from '../../Global/styles/adminHousestyle.module.css'
import { Card, NewItem } from '../../../Cards'
import firebase from '../../../../../db/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { convertDate } from '../../../lib/convertDate'

const EventSelect = ({ changeSection }) => {

    const [ events ] = useCollectionData(
        firebase.firestore().collection('schedule').orderBy('startDate', 'desc'),
        {
            idField: 'id'
        }
    )
    
    const editEvent = id => {
        console.log('Trying to navigate to ', id)
        changeSection('Schedule Edit', id)
    }

    const addEvent = () => {
        firebase.
            firestore()
            .collection('schedule')
            .add({
                institution: '',
                link: '',
                status: '',
                performances: [],
                repertoire: [],
                startDate: new Date(),
                endDate: new Date()
            })
            .then(doc => {
                console.log('Created event with id', doc.id)
                setTimeout(()=>{
                    editEvent(doc.id)
                }, 1000)
            })        
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