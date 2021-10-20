import React from 'react'

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#EEE',
    },
    text: {
        margin: '0',
        color: '#444',
        fontSize: '12px',
        fontFamily: 'Montserrat',
    },
    link: {
        textDecoration: 'none',
        color: '#444',
        fontSize: '12px',
        fontFamily: 'Montserrat',
    }
}

export default function Info() {
    return (
        <div style={styles.container}>
            <p style={styles.text}>
                Created with &lt;3 by 
                 <a style={styles.link} target="_blank" rel="noreferrer nofollow" href="https://www.instagram.com/_cafregoso/"> @_cafregoso</a>
            </p>
        </div>
    )
}
