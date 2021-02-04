import { Switch, EventList } from '../Events'
import { useState } from 'react'

const Content = () => {

    // const { title, body } = content

    const title = 'Schedule'
    const body = ''
    const events = [ 1, 2, 3 ]

    const [ showFuture, setShowFuture ] = useState(true)
    
    return (
        <>
            <div className="normal-page-wrapper">
                <h1>{title}</h1>
                <p>{body}</p>

                <Switch
                    future={showFuture}
                    toggle={() => setShowFuture(!showFuture)} 
                />
                <EventList
                    events={events}
                    future={showFuture}
                />

            </div>
        </>
    )
}

export default Content