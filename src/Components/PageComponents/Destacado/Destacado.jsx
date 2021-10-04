import React from 'react'

const styles = {
    container: {
        width: '170px',
        display: 'inline-block',
        margin: '10px auto',
        marginLeft: '10px',
        alignItems: 'center',
    },
    image: {
        width: '150px',
        height: '150px',
    },
    title: {
        marginTop: '0',
        textAlign: 'center',
        color: '#75787B'
    },
}

export default function Destacado({ img, name }) {
    return (
        <div style={styles.container} >
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <img style={styles.image} src={img} alt={name} />
            </div>

            <h3 style={styles.title} >
                {name}
            </h3>
        </div>
    )
}
