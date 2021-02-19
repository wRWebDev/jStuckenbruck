import firebase from '../../../../../db/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const PageEdit = ({ id }) => {

    const [ data ] = useDocumentData(firebase.firestore().collection('pages').doc(id))

    return (
        <>
            <h1>Page Content</h1>
            <h2>{`Edit the ${id} page`}</h2>
            
        </>
    )
}

export default PageEdit