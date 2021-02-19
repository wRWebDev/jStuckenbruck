const NewItem = ({ action }) => {
    return (
        <div
            onClick={action}
            style={{
                color: 'rgba(255,255,255,0.8)',
                border: '2px dashed rgba(255,255,255,0.8)',
                width: 140,
                height: 140,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '20pt',
                borderRadius: 7,
                fontSize: '2rem',
                cursor: 'pointer'
            }}
        >
            +
        </div>
    )
}

export default NewItem