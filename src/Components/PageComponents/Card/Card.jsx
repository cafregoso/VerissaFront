import React, { Fragment } from 'react'

import './Card.css'

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '25px auto',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        width: '300px',
        borderRadius: '4px',
        margin: '5px'
    },
}

export default function Card({ img, name }) {

    return (
        <Fragment>
            <img className="card__image" style={styles.image} src={img} alt={name} />
            {
                name && <h3 style={styles.title}>{name}</h3>
            }
        </Fragment>
    )
}