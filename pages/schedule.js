import firebase from '../db/firebase'
import HouseStyle from '../components/Layout/HouseStyle'

// import page content

const pageDetails = {
  name: 'events',
  title: 'Schedule',
  description: 'See Johann Stuckenbruck\'s concert schedule.',
  image: '',
  darkMode: false
}

const Page = ({ content }) => {

  return (
    <>
      <HouseStyle properties={pageDetails}>
        Page Content
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