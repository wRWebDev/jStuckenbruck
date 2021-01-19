import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const HouseStyle = ({ properties, children }) => {
    
    const { title, description, image, darkMode, hideFooter } = properties

    return (
        <>
            <Head>
                <title>{`${title} // Johann Stuckenbruck`}</title>
                <base href="/" />
                <meta charSet="utf-8" />
                <meta name="viewport"           content="initial-scale=1.0, width=device-width" />
                <meta property="og:type"        content="website" />
                <meta property="og:title"       content={`${title} // Johann Stuckenbruck`} />
                <meta property="og:description" content={description} />
                {/* <meta property="og:image"       content={`${image}`} /> */}
                {/* <meta property="og:url"         content="" /> */}
                {/* <meta property="twitter:card"   content="summary_large_image" /> */}
                {/* <meta name="keywords"           content="String, Instrument, Bow, Violin, Cello, Viola, Bowed, Strings, Classical, Music, Musical, Instruments, Matchmakers, Agency, Auction, Retail, London, ViolinShop, Shop, Buying, Selling, Arco" /> */}
            </Head>
            <Header darkMode={darkMode} />
            <main>
                {children}
            </main>
            <Footer hideFooter={hideFooter || false} />
        </>
    )
}

export default HouseStyle