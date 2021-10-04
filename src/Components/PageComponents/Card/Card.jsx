import React from 'react'

import './Card.css'

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '25px auto',
    },
    image: {
        width: '300px',
        borderRadius: '4px',
    },
}

export default function Card({ id, img, name }) {

    return (
        <div style={styles.container}>
            <img style={styles.image} src={img} alt={name} />
        </div>
    )
}
