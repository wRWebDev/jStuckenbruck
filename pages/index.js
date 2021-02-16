import firebase from '../db/firebase'
import HouseStyle from '../components/Layout/HouseStyle'
import Content from '../components/Content/Homepage'
import { update } from '../db/updateBio'

const pageDetails = {
  name: 'home',
  title: 'Home',
  description: 'Welcome to the website of conductor, Johann Stuckenbruck.',
  image: '',
  darkMode: true,
  hideFooter: true
}

const Page = ({ content }) => {

  update()

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