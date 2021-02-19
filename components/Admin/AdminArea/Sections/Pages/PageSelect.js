import styles from '../../Global/styles/adminHousestyle.module.css'
import firebase from '../../../../../db/firebase'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { Card } from '../../../Cards'

const PageSelect = ({ changeSection }) => {

    const [ pages ] = useCollectionDataOnce(
        firebase.firestore().collection('pages').orderBy('ordering'), 
        {
            idField: 'id' 
        }
    )

    const editPage = id => {
        console.log('Trying to navigate to ', id)
        changeSection('Page Edit', id)
    }

    return (
        <>
            <h1>Page Content</h1>
            <h2>Select a page to edit</h2>
            <div className={styles.userInterface}>
                {
                    !pages
                        ? 'Loading pages...'
                        : pages.map((page, i) => (
                            <Card 
                                action={editPage}
                                id={page.id}
                                title={page.title}
                            />
                        )) 
                }
            </div>
        </>
    )
}

export default PageSelect