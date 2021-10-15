import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CardProduct from '../../PageComponents/CardProduct/CardProduct'

export default function ProductosEspeciales() {
    const id = useParams().id
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/v1/product/${id}`)
            .then(response => {
                setProducts(response.data)
            })
    }, [id])

    return (
        <div>
            <h1 style={{ marginLeft: '30px', color: '#75787B' }} >PRODUCTOS ESPECIALES</h1>

            <section style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                {
                    products.map(({ id, title, image}) => (
                        <Link
                            style={{ textDecoration: 'none', color: '#000', }}
                            to={`/producto/${id}`}
                            key={id}
                        >
                            <CardProduct
                                img={image}
                                name={title}
                            /> 
                        </Link>
                    ))
                }
            </section>
        </div>
    )
}