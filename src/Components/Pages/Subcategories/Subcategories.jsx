import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
        <div>
            <h1>Subcategorias</h1>
            {
                categories.map(({ id, name, image}) => (
                    <Link
                        style={{ textDecoration: 'none', color: '#000', }}
                        to={`/productos/${id}`}
                        key={id}
                    >
                        <Card
                            id={id}
                            img={image}
                            name={name}
                        /> 
                    </Link>
                ))
            }
        </div>
    )
}
