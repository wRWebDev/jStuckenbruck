import firebase from '../db/firebase'
const auth = firebase.auth()
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from '../components/Admin/Login'
import AdminArea from '../components/Admin/AdminArea'
import { setBackgroundImage } from '../components/Admin/AdminArea/Global/setBackgroundImage'
import { useEffect } from 'react'

const Page = () => {
    
    useEffect(() => {
        setBackgroundImage()
    }, [])
    
    const [ user ] = useAuthState(auth)
    
    const handleLogin = (e, email, password) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .catch(err => console.error(err.message))
    }

    return user 
        ? <AdminArea />
        : <Login handleLogin={handleLogin} />

}

export default Page