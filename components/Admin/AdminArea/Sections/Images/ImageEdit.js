import styles from '../../Global/styles/adminHousestyle.module.css'
import firebase from '../../../../../db/firebase'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'

const ImageEdit = ({ index }) => {

    const [ images ] = useDocumentDataOnce(firebase.firestore().collection('media').doc('images'))

    return (
        <>
            <h1>Photo Gallery</h1>
            <h2>Edit the detials for this image</h2>
            <div className={styles.userInterface}>
                {
                    !images
                        ? 'Loading image data...'
                        : <>
                            <h3>{images.gallery[index].title}</h3>
                        </>
                }
            </div>
        </>
    )
}

export default ImageEdit