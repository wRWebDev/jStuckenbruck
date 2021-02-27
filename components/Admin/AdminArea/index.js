import { useState } from 'react'
import Layout from './Global/Layout'
import { 
    Dashboard,
    PageSelect,
    PageEdit,
    EventSelect,
    EventEdit,
    ImageSelect,
    ImageEdit,
    VideoSelect,
    VideoEdit
} from './Sections'

const AdminArea = () => {

    const [ section, setSectionTo ] = useState('Dashboard')
    const [ editId, setEditId ] = useState('')

    const changeSection = (section = String, id) => {
        if(id !== undefined){setEditId(id)}
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
                return <EventEdit id={editId} changeSection={changeSection} />
            case 'Photo Gallery':
                return <ImageSelect changeSection={changeSection} /> 
            case 'Photo Edit':
                return <ImageEdit index={editId} /> 
            case 'Videos':
                return <VideoSelect changeSection={changeSection} /> 
            case 'Video Edit':
                return <VideoEdit index={editId} /> 
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