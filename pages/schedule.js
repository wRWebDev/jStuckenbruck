import firebase from '../db/firebase'
import HouseStyle from '../components/Layout/HouseStyle'
import Content from '../components/Content/Schedule'

const pageDetails = {
  name: 'events',
  title: 'Schedule',
  description: 'See Johann Stuckenbruck\'s concert schedule.',
  image: '',
  darkMode: false
}

const Page = ({ content, upcomingEvents }) => {
  return (
    <>
      <HouseStyle properties={pageDetails}>
        <Content 
          content={content}
          upcomingEvents={JSON.parse(upcomingEvents)}
        />
      </HouseStyle>
    </>
  )
}

export async function getServerSideProps(){
  
  const pageData = await firebase
  .firestore()
  .collection('pages')
  .doc(pageDetails.name)
  .get()
  
  const now = new Date()
  const upcomingEvents = await firebase 
    .firestore()
    .collection('schedule')
    .orderBy('endDate', 'asc')
    .where('endDate', '>=', now)
    .limit(20)
    .get()
    .then(snapshot => {
      const events = []
      snapshot.forEach(doc => {
        events.push(doc.data())
      })
      return events
    })

  return { props: { 
    content: pageData.data(),
    upcomingEvents: JSON.stringify(upcomingEvents)
  }}
}

export default Page