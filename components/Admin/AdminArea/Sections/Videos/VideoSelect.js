import styles from '../../Global/styles/adminHousestyle.module.css'
import firebase from '../../../../../db/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { Card, NewItem } from '../../../Cards'

const VideoSelect = ({ changeSection }) => {

    const [ videos ] = useDocumentData(firebase.firestore().collection('media').doc('videos'))

    const editVideo = index => {
        console.log('Trying to navigate to ', index)
        changeSection('Video Edit', parseInt(index))
    }

    return (
        <>
            <h1>Videos</h1>
            <h2>Select a video to edit the link, title and subtitle</h2>
            <div className={styles.userInterface}>
                {
                    !videos
                        ? 'Loading photo gallery...'
                        : <>
                            <NewItem />
                            {
                                videos.gallery.map((vid, key) => (
                                    <Card 
                                        key={key}
                                        title={vid.title}
                                        id={key}
                                        action={editVideo}
                                    />
                                ))
                            }
                        </>
                }
            </div>
        </>
    )
}

export default VideoSelect