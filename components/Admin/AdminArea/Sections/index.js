const listOfSections = [
    {
        name: 'Pages',
        icon: '',
        description: 'Edit the title, content, and main image for each page'
    },{
        name: 'Schedule',
        icon: '',
        description: 'Edit your concert schedule or add more engagements'
    },{
        name: 'Photo Gallery',
        icon: '',
        description: 'Upload new photos, edit captions and credit photogrpahers.'
    },{
        name: 'Videos',
        icon: '',
        description: 'Edit the list of Youtube videos you have embedded in your media page'
    },{
        name: 'Settings',
        icon: '',
        description: 'Update your password and other account settings'
    }
]

import Dashboard from './Dashboard'
import EventSelect from './Events/EventSelect'
import ImageSelect from './Images/ImageSelect'
import PageSelect from './Pages/PageSelect'
import VideoSelect from './Videos/VideoSelect'

export {
    listOfSections,
    Dashboard,
    EventSelect,
    ImageSelect,
    PageSelect,
    VideoSelect
}