import styles from '../../Global/styles/adminHousestyle.module.css'
import firebase from '../../../../../db/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { useState, useEffect } from 'react'
import { TextyInput, TextArea, Button } from '../../../FormElements'

const PageEdit = ({ id }) => {
    
    const [ data ] = useDocumentData(firebase.firestore().collection('pages').doc(id))

    const [ title, setTitleTo ] = useState('')
    const [ body, setBodyTo ] = useState('')
    const [ saving, setSavingTo ] = useState(false)

    useEffect(()=>{
        if(data && !title){
            setTitleTo(data.title)
            setBodyTo(data.body)
        }
    }, [data])
    
    const saveChanges = () => {
        setSavingTo(true)
        
        firebase.firestore().collection('pages').doc(id).update({
            title,
            body
        })

        setTimeout(()=>{
            setSavingTo(false)
        }, 1000)
    }

    return (
        <>
            <h1>Page Content</h1>
            <h2>{`Edit the ${id} page`}</h2>
            <div className={styles.userInterface}>
                {
                    !data
                        ? 'Loading page data...'
                        : <form onSubmit={e => {e.preventDefault()}}>
                            <TextyInput 
                                type="text"
                                changeHandler={e => {setTitleTo(e.target.value)}}
                                value={title}
                                name="title"
                                label="Page title"
                                placeholder="e.g. Biography"
                            />
                            {
                                id !== 'home' 
                                    ? <TextArea 
                                        changeHandler={e => {setBodyTo(e.target.value)}}
                                        value={body}
                                        name="body"
                                        label="Main content"
                                    /> : ''
                            }
                            <Button 
                                clickHandler={saveChanges}
                                type="button"
                                disabled={saving}
                            />
                        </form>
                }{
                    id === 'about' || id === 'events'
                        ? 'Image module'
                        : ''
                }
            </div>
        </>
    )
}

export default PageEdit