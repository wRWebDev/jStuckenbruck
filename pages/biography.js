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
  
  const snapshot = await firebase
    .firestore()
    .collection('pages/about/biog_sections')
    .orderBy('position', 'asc')
    .get()
  const list = snapshot.docs.map(doc => doc.data())

  return { props: { content: list } }
}

export default Page