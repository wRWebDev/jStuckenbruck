import styles from '../../Global/styles/adminHousestyle.module.css'
import firebase from '../../../../../db/firebase'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'

const VideoEdit = ({ index }) => {

    const [ videos ] = useDocumentDataOnce(firebase.firestore().collection('media').doc('videos'))

    return (
        <>
            <h1>Videos</h1>
            <h2>Edit the detials for this video</h2>
            <div className={styles.userInterface}>
                {
                    !videos
                        ? 'Loading image data...'
                        : <>
                            <h3>{videos.gallery[index].title}</h3>
                        </>
                }
            </div>
        </>
    )
}

export default VideoEdit