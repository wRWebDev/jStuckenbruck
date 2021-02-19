import Head from 'next/head'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import styles from './styles/adminHousestyle.module.css'

const Layout = ({ children, changeSection }) => {
    return (
        <>
            <div className={styles.adminWrapper}>
                <Head>
                    <title>wRWebDev // JStuckenbruck Site Editor</title>
                </Head>
                <Header />
                <Menu changeSection={changeSection} />
                <div className={styles.adminMainContent}>
                    { children }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout