const Content = ({ content }) => {

    const { title, body } = content

    return (
        <>
            <div className="normal-page-wrapper">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </>
    )
}

export default Content