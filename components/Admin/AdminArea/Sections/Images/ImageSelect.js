import styles from '../../Global/styles/adminHousestyle.module.css'
import firebase from '../../../../../db/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { Card, NewItem } from '../../../Cards'

const ImageSelect = ({ changeSection }) => {

    const [ images ] = useDocumentData(firebase.firestore().collection('media').doc('images'))

    const editImage = index => {
        console.log('Trying to navigate to ', index)
        changeSection('Photo Edit', parseInt(index))
    }


    return (
        <>
            <h1>Photo Gallery</h1>
            <h2>Select an image to edit the caption and credit</h2>
            <div className={styles.userInterface}>
                {
                    !images
                        ? 'Loading photo gallery...'
                        : <>
                            <NewItem />
                            {
                                images.gallery.map((img, key) => (
                                    <Card 
                                        key={key}
                                        image={img.src}
                                        id={key}
                                        action={editImage}
                                    />
                                ))
                            }
                        </>
                }
            </div>
        </>
    )
}

export default ImageSelect