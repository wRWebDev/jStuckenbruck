/*
  MEDIA (/media)
    - Load page content server-side
     (title, body content)
    - Media loaded client-side
     (photos, videos) - components/Content/Media
    - Enable dark-mode
*/

import firebase from '../db/firebase'
import HouseStyle from '../components/Layout/HouseStyle'
import Content from '../components/Content/Media'

const pageDetails = {
  name: 'media',
  title: 'Media',
  description: 'View images and watch videos of Johann Stuckenbruck and ensembles he\'s worked with.',
  image: '',
  darkMode: true
}

const Page = ({ content }) => {

  return (
    <>
      <HouseStyle properties={pageDetails}>
        <Content content={content} />
      </HouseStyle>
    </>
  )
}

export async function getServerSideProps(ctx){
  const pageData = await firebase
    .firestore()
    .collection('pages')
    .doc(pageDetails.name)
    .get()
  return { props: { content: pageData.data() } }
}

export default Page