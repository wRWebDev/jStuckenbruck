const Card = ({ title = String, subtitle = String, image = String }) => {
    return (
        <div
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
                overflow: 'hidden'
            }}
        >
            <strong>{title}</strong>
            <span style={{marginTop: 10}}>{subtitle}</span>
        </div>
    )
}

export default Card