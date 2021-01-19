import FullPageCarousel from '../FullPageCarousel'

const Content = ({ content }) => {

    const { title, text, images} = content

    

    return (
        <>
            <FullPageCarousel
                folder="homepage-carousel"
                images={images}
            />
        </>
    )
}

export default Content