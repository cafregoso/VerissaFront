import React, { Fragment } from 'react'

const styles = {
    container: {
        display: 'inline-block'
    },
    image: {
        width: '100px',
        height: '100px',
    },
    title: {

    },
}

export default function Destacado({ img, name }) {
    return (
        <Fragment>
            <div style={styles.container}>
                <img style={styles.image} src={img} alt={name} />

                <h3 style={styles.title} >
                    {name}
                </h3>
            </div>
        </Fragment>
    )
}
