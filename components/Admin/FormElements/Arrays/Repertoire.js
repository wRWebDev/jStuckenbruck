/*
    [o] Prop list: 
        [-] List of items
        [ ] Function to update the top-level state
    [-] Make add button
    [o] Populate list of existing items
*/

import TextyInput from '../TextyInput'
import Button from '../Button'
import AddButton from './AddButton'
import ArrayItem from './ArrayItem'
import InputOverlay from './InputOverlay'
import { useState, useEffect } from 'react'

/* Effects for opening / closing the add overlay */
const openOverlay = repOverlay => {
    repOverlay.style.zIndex = -99
    repOverlay.style.opacity = 0
}

const closeOverlay = repOverlay => {
    repOverlay.style.zIndex = 50
    repOverlay.style.opacity = 1
}

const Repertoire = ({ repList = [], updateMainList = Function }) => {

    const [ newComposer, setNewComposerTo ] = useState('')
    const [ newWork, setNewWorkTo ] = useState('')
    const [ showingOverlay, setShowingOverlayTo ] = useState(false)

    useEffect(()=>{
        const repOverlay = document.getElementById('repertoireOverlay')
        if(showingOverlay){
            closeOverlay(repOverlay)
        }else{
           openOverlay(repOverlay)
        }
    }, [showingOverlay])

    /* 
        • Add a new work to the repertoire list
        • Adds directly by updating the state of the parent element
        • Resets form
        • Hides overlay
    */
    const addNewItem = () => {
        updateMainList([...repList, {
           composer: newComposer,
           work: newWork
        }])
        setNewComposerTo('')
        setNewWorkTo('')
        setShowingOverlayTo(false)
    }

    const removeItem = index => {
        updateMainList(
            repList.filter((rep, i) => i !== index)
        )
    }

    return (
        <>
            <label
                style={{
                    width: '100%',
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    fontStyle: 'italic',
                }}
            >
                Repertoire
                <AddButton 
                    action={() => setShowingOverlayTo(true)}
                />
            </label>
            {
                repList.map((item, i) => (
                    <ArrayItem
                        key={i}
                        item={[item.composer, item.work]}
                        arrPosition={i}
                        removeItem={removeItem}
                    />
                ))
            }
            <InputOverlay 
                id="repertoireOverlay"
                closeOverlay={() => setShowingOverlayTo(false)}
                showing={showingOverlay}    
            >
                <TextyInput 
                    label="Composer"
                    value={newComposer}
                    changeHandler={e=>{setNewComposerTo(e.target.value)}}
                    type="text"
                    name="composer"
                    placeholder="e.g. Beethoven"
                />
                <TextyInput 
                    label="Work"
                    value={newWork}
                    changeHandler={e=>{setNewWorkTo(e.target.value)}}
                    type="text"
                    name="work"
                    placeholder="e.g. Symphony No. 5"
                />
                <Button 
                    text="Add work"
                    type="button"
                    clickHandler={addNewItem}
                />
            </InputOverlay>
        </>
    )
}

export default Repertoire