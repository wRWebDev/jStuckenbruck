import firebase from '../../db/firebase'
import { Switch, EventList } from '../Events'
import { useEffect, useState } from 'react'

const Content = ({ content, upcomingEvents }) => {

    const { title, body } = content
    const [ eventList, setEventListTo ] = useState(upcomingEvents)

    /* Function for fetching events from db */
    const fetchEvents = async future => {
        // dependent variables & functions
        const now = new Date()
        const queryBase = firebase.firestore().collection('schedule')
        const handleSnapshot = snapshot => {
            const events = []
            snapshot.forEach(doc => {events.push(doc.data())})
            return events
        }
        // main function
        if(!future){
            const pastEvents = await queryBase
                .orderBy('startDate', 'desc')
                .where('startDate', '<', now)
                .limit(20)
                .get()
                .then(snap => handleSnapshot(snap))
            setEventListTo(pastEvents)
        }else{
            const futureEvents = await queryBase
                .orderBy('startDate', 'asc')
                .where('startDate', '>=', now)
                .limit(20)
                .get()
                .then(snap => handleSnapshot(snap))
            setEventListTo(futureEvents)
        }
    }

    console.log('Event List: ', eventList)

    /* Component */
    return (
        <>
            <div className="normal-page-wrapper">
                <h1>{title}</h1>
                <p>{body}</p>
                <Switch
                    fetchEvents={fetchEvents} 
                />
                <EventList
                    events={eventList}
                />
            </div>
        </>
    )
}

export default Content