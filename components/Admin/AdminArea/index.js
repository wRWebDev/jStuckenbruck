import { useState } from 'react'
import Layout from './Global/Layout'
import { 
    Dashboard,
    PageSelect,
    PageEdit,
    EventSelect,
    EventEdit,
    ImageSelect,
    VideoSelect,
} from './Sections'

const AdminArea = () => {

    const [ section, setSectionTo ] = useState('Dashboard')
    const [ editId, setEditId ] = useState('')

    const changeSection = (section = String, id = String) => {
        if(id){setEditId(id)}
        setSectionTo(section)
    }

    const displaySection = () => {
        switch(section){
            case 'Pages':
                return <PageSelect changeSection={changeSection} />
            case 'Page Edit':
                return <PageEdit id={editId} />
            case 'Schedule':
                return <EventSelect changeSection={changeSection} />
            case 'Schedule Edit':
                return <EventEdit id={editId} />
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