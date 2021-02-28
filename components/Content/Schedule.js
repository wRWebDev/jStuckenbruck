/*
    HOMEPAGE CONTENT
        - Function to fetch past or future events depending on user selection
        - Displays title & body content
        - Sets page image as background of the <main> element
*/

import firebase from '../../db/firebase'
import { Switch, EventList, Overlay } from '../Events'
import { useState, useEffect } from 'react'
import styles from '../Events/styles/events.module.css'

const Content = ({ content, upcomingEvents }) => {

    const { title, body, image } = content
    const [ eventList, setEventListTo ] = useState(upcomingEvents)
    const [ viewingFuture, setViewingFutureTo ] = useState(true)
    const [ currentEvent, setCurrentEventTo ] = useState({})

    /* Set the background image */
    useEffect(() => {
        const main = document.querySelector('main')
        // main.style.marginTop = 0
        // main.style.paddingTop = '95px'
        main.style.backgroundImage = `url(${process.env.NEXT_PUBLIC_BUCKET}/media/images/${image})`
    }, [])

    /* Function for fetching events from db */
    const fetchEvents = async future => {
        // dependent variables
        const now = new Date()
        const queryBase = firebase.firestore().collection('schedule')
        // function to transform snapshot into an array of objects
        // each object is a distinct event (possible with multiple performances)
        const handleSnapshot = snapshot => {
            const events = []
            snapshot.forEach(doc => {events.push(doc.data())})
            return events
        }
        // fetch events from db
        if(!future){
            // fetch past events
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
            // fetch future events
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

    /* 
        Function to open a full-screen overlay
            - displays selected event's details
            - slides in from the bottom of the screen
    */
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