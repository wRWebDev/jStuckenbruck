import CoverFlowCarousel from '../CoverFlowCarousel'

const Content = ({ content }) => {

    const { title, body } = content

    return (
        <>
            <div className="normal-page-wrapper">
                <h1>{title}</h1>
                <p>{body}</p>
                <h2 style={{marginTop: '20pt'}}>Photo Gallery</h2>
                <CoverFlowCarousel />
                <h2 style={{marginTop: '20pt'}}>Video Gallery</h2>
            </div>
        </>
    )
}

export default Content