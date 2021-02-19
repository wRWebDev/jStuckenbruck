const Card = ({ id = String, title = String, subtitle = String, image = String, action = Function }) => {
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
                whiteSpace: 'pre-line'
            }}
        >
            <strong>{title}</strong>
            {subtitle && <span style={{marginTop: 10, fontSize: '0.8rem'}}>{subtitle}</span>}
        </div>
    )
}

export default Card