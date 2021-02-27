import Image from 'next/image'

const Card = ({ id = '', title = '', subtitle = '', image = '', action = Function }) => {
    return (
        <div
            onClick={() => {action(id)}}
            style={{
                background: '#fff',
                color: '#000',
                borderRadius: 7,
                width: 140,
                height: 140,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20pt',
                textAlign: 'center',
                overflow: 'hidden',
                cursor: 'pointer',
                padding: 10,
                whiteSpace: 'pre-line',
                position: 'relative'
            }
        }
        >
            {
                image ? <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: 'rgba(0,0,0,0.8)',
                    backgroundImage: `url(/img/house/loader-white.gif)`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 32,
                    width: 140, 
                    height: 140,
                }}>
                     <Image 
                        src={`${process.env.NEXT_PUBLIC_BUCKET}/media/images/${image}`}
                        layout="responsive"
                        width={140}
                        height={140}
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div> : ''

            }
            {title ? <strong>{title}</strong> : ''}
            {subtitle ? <span style={{marginTop: 10, fontSize: '0.8rem'}}>{subtitle}</span> : ''}
        </div>
    )
}

export default Card