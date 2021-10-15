import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from '../../PageComponents/Card/Card'

export default function Subcategories() {
    const id = useParams().id
    const [ categories, setCategories ] = useState([])
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/v1/${id}`)
            .then(response => {
                setCategories(response.data)
            })
    }, [id])

    return (
        <Fragment>
            <h1 style={{ marginLeft: '30px', color: '#75787B' }} >SUBCATEGORÍAS</h1>

            <section style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                height: '50vh'
            }}>
                {
                    categories.map(({ id, image}) => (
                        <Link
                            style={{ 
                                textDecoration: 'none', 
                                color: '#000', 
                                display: 'grid',
                                placeItems: 'center',
                            }}
                            to={`/productos/${id}`}
                            key={id}
                        >
                            <Card
                                img={image}
                            /> 
                        </Link>
                    ))
                }
            </section>
        </Fragment>
    )
}
