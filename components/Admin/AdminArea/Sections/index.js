const listOfSections = [
    {
        name: 'Pages',
        icon: 'pages',
        description: 'Edit the title, content, and main image for each page'
    },{
        name: 'Schedule',
        icon: 'schedule',
        description: 'Edit your concert schedule or add more engagements'
    },{
        name: 'Photo Gallery',
        icon: 'photos',
        description: 'Upload new photos, edit captions and credit photogrpahers.'
    },{
        name: 'Videos',
        icon: 'videos',
        description: 'Edit the list of Youtube videos you have embedded in your media page'
    },{
        name: 'Settings',
        icon: 'settings',
        description: 'Update your password and other account settings'
    }
]

import Dashboard from './Dashboard'
import EventSelect from './Events/EventSelect'
import EventEdit from './Events/EventEdit'
import ImageSelect from './Images/ImageSelect'
import PageSelect from './Pages/PageSelect'
import PageEdit from './Pages/PageEdit'
import VideoSelect from './Videos/VideoSelect'

export {
    listOfSections,
    Dashboard,
    EventSelect,
    EventEdit,
    ImageSelect,
    PageSelect,
    PageEdit,
    VideoSelect
}