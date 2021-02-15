import { useState, useEffect } from 'react'

const Switch = ({ fetchEvents }) => {

    const [ viewingFuture, setViewingFutureTo ] = useState(true)
    const switchView = (changeTo) => {
        if(changeTo === 'future' && !viewingFuture){
            setViewingFutureTo(true)
        }else if(changeTo === 'past' && viewingFuture){
            setViewingFutureTo(false)
        }
    }

    useEffect(()=>{
        fetchEvents(viewingFuture)
    }, [viewingFuture])

    const switchStyles = {
        display: 'inline-block', 
        marginRight: '15pt', 
        cursor: 'pointer'
    }

    return (
        <>
            <div id ="eventSwitch">
                <h3 
                    style={viewingFuture ? switchStyles : { ...switchStyles, textDecoration: 'underline' }}
                    onClick={()=>{switchView('past')}}
                >
                    Past Concerts
                </h3>
                <h3 
                    style={viewingFuture ? { ...switchStyles, textDecoration: 'underline' } : switchStyles}
                    onClick={()=>{switchView('future')}}
                >
                    Upcoming Concerts
                </h3>
            </div>
        </>
    )
}

export default Switch