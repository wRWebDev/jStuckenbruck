import firebase from '../../../db/firebase'
import { separatePerformances } from '../../Events/separation'
import { useEffect, useState } from 'react'
import next from 'next'

const NextEvent = () => {

    const [ nextEvent, setNextEventTo ] = useState(null)
    
    const getNextEvent = async () => {

        const now = new Date()
        const event = await firebase
            .firestore()
            .collection('schedule')
            .orderBy('endDate', 'asc')
            .where('endDate', '>=', now)
            .limit(2)
            .get()
            .then(snapshot => {
                // make an array of objects
                // each obj is one of the fetched events
                const events = []
                snapshot.forEach(doc => {
                    events.push(doc.data())
                })
                // split performances in an event with multiple performances
                return separatePerformances(events, true)
                    .filter(event => event.type === 'event')
                    .slice(0,1)
                    .map(event => {
                        // format the programme
                        let programme = ''
                        event.repertoire.forEach(rep => {
                            programme += `${rep.composer}: ${rep.work}\n`
                        })
                        // return an obeject with the necessary data for the performance
                        return {
                            date: new Date(event.performanceDate * 1000).toLocaleDateString('en-GB'),
                            location: event.location,
                            institution: event.institution,
                            programme,
                            soloist: event.soloist,
                            status: event.status
                        }
                    })
            })

        setNextEventTo(event[0])
        return null
    }

    useEffect(()=>{
        getNextEvent()
    }, [])
    
    return (
        <>
            {
                !nextEvent 
                    ? ''
                    : <>
                        <h3>{nextEvent.institution}</h3>
                        <em>{nextEvent.location}</em>
                        <p>{nextEvent.date}</p>
                        <h4>{nextEvent.status}</h4>
                    </>
            }
        </>
    )
}

export default NextEvent