import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '../../PageComponents/Card/Card'

export default function Subcategories() {
    const id = useParams().id
    const [ products, setProducts ] = useState([])
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/v1/productos/${id}`)
            .then(response => {
                setProducts(response.data)
            })
    }, [id])

    return (
        <div>
            <h1>Productos</h1>
            {
                products.map(({ id, title, image}) => (
                    <Link
                        style={{ textDecoration: 'none', color: '#000', }}
                        to={`/producto/${id}`}
                        key={id}
                    >
                        <Card
                            id={id}
                            img={image}
                            name={title}
                        /> 
                    </Link>
                ))
            }
        </div>
    )
}
