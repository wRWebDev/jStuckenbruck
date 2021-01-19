import FullPageCarousel from '../FullPageCarousel'
import Link from 'next/link'

const Content = ({ content }) => {

    const { title, text, images} = content


    return (
        <>
            <FullPageCarousel
                folder="homepage-carousel"
                images={images}
            >
                <Link href="/biography">
                    <a>
                        <button id="home-button">
                            <h4>Click to enter</h4>
                            <img src="/img/house/right-arrow.svg" />
                        </button>
                    </a>
                </Link>
            </FullPageCarousel>
        </>
    )
}

export default Content