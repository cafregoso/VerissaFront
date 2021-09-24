import React from 'react'

import './Card.css'

const styles = {
    container: {
        position: 'relative',
        display: 'block',
        textAlign: 'center',
    },
    image: {
        width: '150px',
        height: '150px',
    },
    name: {
        position: 'absolute',
        top: '70%',
        left: '40%',
    },
}

export default function Card({ id, img, name }) {

    return (
        <div style={styles.container}>
            <img style={styles.image} src={img} alt={name} />
            <h3 style={styles.name}>{name}</h3>
        </div>
    )
}
