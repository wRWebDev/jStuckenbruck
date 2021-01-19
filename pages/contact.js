import firebase from '../db/firebase'
import HouseStyle from '../components/Layout/HouseStyle'
import Content from '../components/Content/Contact'

const pageDetails = {
  name: 'contact',
  title: 'Contact',
  description: 'Get in touch! The contact page of conductor, Johann Stuckenbruck\'s website.',
  image: '',
  darkMode: false
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