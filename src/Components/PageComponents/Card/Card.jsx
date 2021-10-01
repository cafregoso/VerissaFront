import React from 'react'

import './Card.css'

const styles = {
    container: {
        position: 'relative',
        display: 'block',
        textAlign: 'center',
        margin: '15px auto',
    },
    image: {
        width: '300px',
    },
    name: {
        position: 'fix',
        top: 'calc(100% - 45px)',
        left: 'calc(100% - 150px)',
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
