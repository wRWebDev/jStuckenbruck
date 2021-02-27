import TextyInput from '../TextyInput'
import Button from '../Button'
import AddButton from './AddButton'
import ArrayItem from './ArrayItem'
import InputOverlay from './InputOverlay'
import { useState, useEffect } from 'react'
import { convertDate } from '../../lib'
import firebase from '../../../../db/firebase'
const firestore = firebase.firestore

const openOverlay = repOverlay => {
    repOverlay.style.zIndex = -99
    repOverlay.style.opacity = 0
}

const closeOverlay = repOverlay => {
    repOverlay.style.zIndex = 50
    repOverlay.style.opacity = 1
}

const Performances = ({ perfList = [], updateMainList = Function }) => {

    
    const [ newTimestamp, setNewTimestampTo ] = useState(convertDate(Date.now()))
    const [ showingOverlay, setShowingOverlayTo ] = useState(false)
    
    console.log(newTimestamp)

    useEffect(()=>{
        const repOverlay = document.getElementById('performanceOverlay')
        if(showingOverlay){
            closeOverlay(repOverlay)
        }else{
           openOverlay(repOverlay)
        }
    }, [showingOverlay])

    const addNewItem = () => {
        let newPerfList = [ 
            ...perfList,  
            new firestore.Timestamp(new Date(newTimestamp).getTime() / 1000, 0)
        ]
        updateMainList(
            newPerfList.sort((a, b) => a.seconds - b.seconds)
        )
        setNewTimestampTo(convertDate(Date.now()))
        setShowingOverlayTo(false)
    }

    const removeItem = index => {
        updateMainList(
            perfList.filter((date, i) => i !== index)
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
                Performances
                <AddButton 
                    action={() => setShowingOverlayTo(true)}
                />
            </label>
            {
                perfList.map((perf, i) => {
                    let date = convertDate(perf.seconds * 1000)
                    //let time = getTime(perf.seconds * 1000)
                    return (
                        <ArrayItem
                            key={i}
                            item={[date, '']}
                            arrPosition={i}
                            removeItem={removeItem}
                        />
                    )
                })
            }
            <InputOverlay 
                id="performanceOverlay"
                closeOverlay={() => setShowingOverlayTo(false)}
                showing={showingOverlay}    
            >
                <TextyInput 
                    type="date"
                    changeHandler={e => {setNewTimestampTo(e.target.value)}}
                    value={newTimestamp}
                    placeholder="yyyy-mm-dd"
                    label="Performance Date (yyyy-mm-dd)"
                    name="newPerformance"
                />
                <Button 
                    text="Add performance"
                    type="button"
                    clickHandler={addNewItem}
                />
            </InputOverlay>
        </>
    )
}

export default Performances