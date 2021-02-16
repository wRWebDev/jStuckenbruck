import firebase from '../../db/firebase'
import { Switch, EventList, Overlay } from '../Events'
import { useState, useEffect } from 'react'
import styles from '../Events/styles/events.module.css'

const Content = ({ content, upcomingEvents }) => {

    const { title, body, image } = content
    const [ eventList, setEventListTo ] = useState(upcomingEvents)
    const [ viewingFuture, setViewingFutureTo ] = useState(true)
    const [ currentEvent, setCurrentEventTo ] = useState({})

    /* Set the background image to BSH */
    useEffect(() => {
        const main = document.querySelector('main')
        main.style.marginTop = 0
        main.style.paddingTop = '95px'
        main.style.backgroundImage = `url(${process.env.NEXT_PUBLIC_BUCKET}/media/images/${image})`
    }, [])

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
            setEventListTo([])
            setViewingFutureTo(false)
            const pastEvents = await queryBase
                .orderBy('startDate', 'desc')
                .where('startDate', '<', now)
                .limit(20)
                .get()
                .then(snap => handleSnapshot(snap))
            setEventListTo(pastEvents)
        }else{
            setEventListTo([])
            setViewingFutureTo(true)
            const futureEvents = await queryBase
                .orderBy('endDate', 'asc')
                .where('endDate', '>=', now)
                .limit(20)
                .get()
                .then(snap => handleSnapshot(snap))
            setEventListTo(futureEvents)
        }
    }

    const openOverlay = details => {
        document.getElementById('eventOverlay').style.top = 0
        setCurrentEventTo(details)
    }

    /* Component */
    return (
        <>
            <div 
                className={`normal-page-wrapper ${styles.pageWrapper}`}
            >
                <h1>{title}</h1>
                <p>{body}</p>
                <Switch fetchEvents={fetchEvents} />
                {
                    eventList.length
                        ? <EventList 
                            events={eventList} 
                            future={viewingFuture}
                            openOverlay={openOverlay}
                        />
                        : "Loading Johann's schedule..."
                }
            </div>
            <Overlay 
                details={currentEvent}
            />
        </>
    )
}

export default Content