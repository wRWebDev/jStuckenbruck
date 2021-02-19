import styles from '../../Global/styles/adminHousestyle.module.css'
import firebase from '../../../../../db/firebase'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { Card } from '../../../Cards'

const PageSelect = () => {

    const [ pages ] = useCollectionDataOnce(
        firebase.firestore().collection('pages').orderBy('ordering'), 
        {
            idField: 'id' 
        }
    )

    console.log(pages)

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
                                title={page.title}
                            />
                        )) 
                }
            </div>
        </>
    )
}

export default PageSelect