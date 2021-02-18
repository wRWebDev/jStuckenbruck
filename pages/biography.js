/*
  BIO (/biography)
    - Load page content server-side
    (title, body content, image filename)
*/

import firebase from '../db/firebase'
import HouseStyle from '../components/Layout/HouseStyle'
import Content from '../components/Content/Biography'

const pageDetails = {
  name: 'about',
  title: 'Biography',
  description: 'Read Johann Stuckenbruck\'s biography.',
  image: '',
  darkMode: false,
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