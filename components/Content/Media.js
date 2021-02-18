/*
    MEDIA PAGE CONTENT
        - React-Firebase-Hooks:
            - Fetches filenames of images
            - Fetches data about videos
        - Displays title and body content
        - Displays coverflow slider for image gallery
        - Embeds youtube videos and shows library as a slider
*/

import CoverFlowCarousel from '../CoverFlowCarousel'
import VideoGallery from '../VideoGallery'
import firebase from '../../db/firebase'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'

const Content = ({ content }) => {

    /* Returns array of 2 documents: images & videos */
    const mediaQuery = firebase.firestore().collection('media').limit(2)
    const [ media ] = useCollectionDataOnce(mediaQuery, { idField: 'id' })

    const { title, body } = content

    return (
        <>
            <div className="normal-page-wrapper">
                <h1 style={{color: '#fff', lineHeight: '5.5rem', marginBottom: '20pt'}}>{title}</h1>
                <p style={{color: '#fff'}}>{body}</p>
                {
                    media 
                        ?   <>
                                <CoverFlowCarousel images={media[0].gallery} />
                                <VideoGallery videos={media[1].gallery} />
                            </>
                        : ''
                }
            </div>
        </>
    )
}

export default Content