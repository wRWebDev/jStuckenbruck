/*
    BIOGRAPHY PAGE CONTENT
        - Uses modules from the ParallaxBiog component folder
*/

import { TitleCard, Biog, Download } from '../ParallaxBiog'

const Content = ({ content }) => {

    const { title, body, quotes, image } = content

    const fullImgPath = `${process.env.NEXT_PUBLIC_BUCKET}/media/images/${image}`    

    return (
        <>
            <TitleCard title={title} image={fullImgPath} />
            <Biog bio={body} quote={quotes[quotes.length - 1]} />
            <Download coverImage={fullImgPath} />
        </>
    )
}

export default Content