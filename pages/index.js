/*
  HOMEPAGE (/)
    - Load page content server-side
    (title, array of images for slider)
    - Enable dark-mode
*/

import firebase from '../db/firebase'
import HouseStyle from '../components/Layout/HouseStyle'
import Content from '../components/Content/Homepage'
import { useEffect } from 'react'

const pageDetails = {
  name: 'home',
  title: 'Home',
  description: 'Welcome to the website of conductor, Johann Stuckenbruck.',
  image: '',
  darkMode: true,
  hideFooter: false
}

const Page = ({ content, biography }) => {
 
  /* 
    Remove the background and background blur from the top banner
    as it cuts off the client's head
  */
  useEffect(()=>{
    document.getElementById('site-header').style.background = 'transparent !important'
    document.getElementById('site-header').style.backdropFilter = 'none'
  }, [])

  return (
    <>
      <HouseStyle properties={pageDetails}>
        <Content 
          content={content} 
          biography={biography}  
        />
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

  const biog = await firebase
    .firestore()
    .collection('pages')
    .doc('about')
    .get()

  return { 
    props: { 
      content: pageData.data(),
      biography: biog.data()
    } 
  }
}

export default Page