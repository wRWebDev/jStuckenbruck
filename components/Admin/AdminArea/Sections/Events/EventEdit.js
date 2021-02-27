import styles from '../../Global/styles/adminHousestyle.module.css'
import firebase from '../../../../../db/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { TextyInput, Button, Repertoire, Performances } from '../../../FormElements'
import { useState, useEffect } from 'react'

const EventEdit = ({ id, changeSection }) => {

    const [ data ] = useDocumentData(firebase.firestore().collection('schedule').doc(id))

    const [ institution, setInstitutionTo ] = useState('')
    const [ status, setStatusTo ] = useState('')
    const [ link, setLinkTo ] = useState('')
    const [ repertoire, setRepertoireTo ] = useState([])
    const [ performances, setPerformancesTo ] = useState([])
    const [ saving, setSavingTo ] = useState(false)
    const [ error, setErrorTo ] = useState('')

    useEffect(()=>{
        if(data && !institution){
            setInstitutionTo(data.institution)
            setStatusTo(data.status)
            setLinkTo(data.link)
            setRepertoireTo(data.repertoire)
            setPerformancesTo(data.performances)
        }
    }, [data])

    console.log(performances)

    const saveChanges = e => {
        e.preventDefault()
    
        // show as saving
        setSavingTo(true)

        // validate inputs
        if(performances.length < 1){
            setErrorTo('You must add at least one performance date.')
            setSavingTo(false)
            return null
        }
        if(!institution){
            setErrorTo('You must name the institution this performance is with.')
            setSavingTo(false)
            return null
        }

        // save to firestore
        firebase.firestore().collection('schedule').doc(id).update({
            institution,
            status: status || '',
            link: link || '',
            repertoire,
            performances,
            startDate: performances[0],
            endDate: performances[performances.length - 1]
        })
        
        // show as done saving
        setTimeout(()=>{
            setSavingTo(false)
        },1000)
        
    }

    const removeEvent = () => {
        changeSection('Schedule')
        firebase.firestore().collection('schedule').doc(id).delete()

    }

    return (
        <>
            <h1>Schedule</h1>
            <h2>Edit the details of this event</h2>
            <div className={styles.userInterface}>
                {
                    !data 
                        ? 'Loading event data...'
                        : <>
                            <TextyInput 
                                type="text"
                                changeHandler={e => {setInstitutionTo(e.target.value)}}
                                value={institution}
                                name="institution"
                                label="Institution"
                                placeholder="e.g. Opera North"
                            />
                            <TextyInput 
                                type="text"
                                changeHandler={e => {setStatusTo(e.target.value)}}
                                value={status}
                                name="status"
                                label="Status"
                                placeholder="e.g. Postponed"
                            />
                            <TextyInput 
                                type="url"
                                changeHandler={e => {setLinkTo(e.target.value)}}
                                value={link}
                                name="link"
                                label="External Link"
                                placeholder="e.g. https://glyndebourne.com/"
                            />
                            <Repertoire 
                                repList={repertoire}
                                updateMainList={arr => {setRepertoireTo(arr)}}
                            />
                            <div style={{height:'20pt', width:'100%'}} />
                            <Performances 
                                perfList={performances}
                                updateMainList={arr => {setPerformancesTo(arr)}}
                            />
                            <div style={{height:'20pt', width:'100%'}} />
                            <Button 
                                clickHandler={saveChanges}
                                type="button"
                                accessKey="s"
                                disabled={saving}
                                text={saving ? 'Saving...' : 'Save Changes'}
                            />
                            <div style={{height:'20pt', width:'100%'}} />
                            <Button 
                                clickHandler={removeEvent}
                                type="button"
                                text="Delete event"
                            />
                        </>
                }
            </div>
        </>
    )
}

export default EventEdit