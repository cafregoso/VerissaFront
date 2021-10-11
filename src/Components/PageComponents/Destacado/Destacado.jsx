import React from 'react'

import './Destacado.css'

const styles = {
    image: {
        width: '150px',
    },
    title: {
        marginTop: '0',
        textAlign: 'center',
        color: '#75787B'
    },
}

export default function Destacado({ img, name }) {
    return (
        <div className="destacadoContainer" style={{ margin: '10px' }}>
            <div style={{ display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                <img className="destacadoContainer_img" style={styles.image} src={img} alt={name} />
            </div>

            <h3 style={styles.title} >
                {name}
            </h3>
        </div>
    )
}