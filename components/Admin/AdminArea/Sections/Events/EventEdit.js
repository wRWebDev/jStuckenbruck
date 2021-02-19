import firebase from '../../../../../db/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const EventEdit = ({ id }) => {

    const [ data ] = useDocumentData(firebase.firestore().collection('schedule').doc(id))

    console.log(data)

    return (
        <>
            <h1>Schedule</h1>
            <h2>Edit the details of this event</h2>
            <p>{
                data ? data.institution : ''    
            }</p>
        </>
    )
}

export default EventEdit