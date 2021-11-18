import React, { Fragment } from 'react'

import './CardProduct.css'

const styles = {
    title: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '16px',
        color: '#555',
    },
    image: {
        width: '150px',
        borderRadius: '4px',
        margin: '10px'
    },
}

export default function CardProduct({ img, name }) {

    return (
        <Fragment>
            <img className="cardProduct__image" style={styles.image} src={img} alt={name} />
            {
                name && <h3 style={styles.title}>{name}</h3>
            }
        </Fragment>
    )
}