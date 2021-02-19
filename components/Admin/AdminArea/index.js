import { useState } from 'react'
import Layout from './Global/Layout'
import { 
    Dashboard,
    PageSelect,
    EventSelect,
    ImageSelect,
    VideoSelect,
} from './Sections'

const AdminArea = () => {

    const [ section, setSectionTo ] = useState('Dashboard')

    const changeSection = str => {setSectionTo(str)}

    const displaySection = () => {
        switch(section){
            case 'Pages':
                return <PageSelect />
            case 'Schedule':
                return <EventSelect />
            case 'Photo Gallery':
                return <ImageSelect /> 
            case 'Videos':
                return <VideoSelect /> 
            // case 'Settings':
            //     return < /> 
            default:
                return <Dashboard changeSection={changeSection} />
        }
    }

    return (
        <Layout changeSection={changeSection}>
            {displaySection()}
        </Layout>
    )
}

export default AdminArea