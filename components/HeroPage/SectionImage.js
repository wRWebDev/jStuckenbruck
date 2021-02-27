import Image from 'next/image'

const SectionImage = ({ img, direction }) => {
    return (
        <div 
            className="image"
            data-aos={`fade-${direction}`}    
        >
            <Image 
                src={img}
                layout="responsive"
                width={250}
                height={250}
            />
        </div>
    )
}

export default SectionImage