const ScrollAnimation = ({ inverted }) => {
    return (
        <div 
            className="scrollDown" 
            data-aos="fade-down"
            style={ inverted ? {filter: 'invert(1)'} : {}}
        >
            <span /><span /><span />
        </div>
    )
}

export default ScrollAnimation