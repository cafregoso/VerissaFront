import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CardProduct from '../../PageComponents/CardProduct/CardProduct'
import Banner from '../../PageComponents/Banner/Banner'

export default function ProductosEspeciales() {
    const id = useParams().id
    const [ products, setProducts ] = useState([])
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        axios
            .get(`http://177.231.255.18/api/v1/product/${id}`)
            .then(response => {
                setProducts(response.data)
            })

        axios
            .get(`http://177.231.255.18/api/v1/`)
            .then(response => {
                setCategories(response.data)
            })
    }, [id])

    function useBanner(category) {
        return category.id === parseInt(id)
    }

    const imageBanner = categories.find(useBanner)

    return (
        <div>
            {
                imageBanner && <Banner 
                    img = { imageBanner.banner }
                />
            }
            <h1 style={{ marginLeft: '30px', color: '#75787B' }} >PRODUCTOS</h1>

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
