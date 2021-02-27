import { listOfSections } from '../Sections'

const Dashboard = ({ changeSection }) => {
    return (
        <div
            style={{
                height: '100%',
                padding: '20pt 0',
                display: 'flex',
                flexFlow: 'row wrap',
                alignItems: 'center',
                justifyContent: 'center'                
            }}
        >
            {
                listOfSections.map((section, i) => (
                    <div
                        style={{
                            width: 250,
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            margin: '10pt',
                            cursor: 'pointer'
                        }}
                        key={i}
                        onClick={()=>{changeSection(section.name)}}
                    >
                        <img 
                            src={`/admin/${section.icon}.svg`}
                            style={{
                                width: '100%',
                                height: 100
                            }}
                        />
                        <h3 style={{
                            fontSize: '1.4rem',
                            margin: 5
                        }}>
                            {section.name}
                        </h3>
                        <p style={{
                                fontSize: '0.9rem',
                                margin: 5
                        }}>
                            {section.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard