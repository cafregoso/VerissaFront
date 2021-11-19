import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from '../../PageComponents/Card/Card'
import Banner from '../../PageComponents/Banner/Banner'

export default function Subcategories() {
    const id = useParams().id
    const [ subcategories, setSubcategories ] = useState([])
    const [ categories, setCategories ] = useState([])
    
    useEffect(() => {
        axios
            .get(`http://177.231.255.18/api/v1/`)
            .then(response => {
                setCategories(response.data)
            })

        axios
            .get(`http://177.231.255.18/api/v1/${id}`)
            .then(response => {
                setSubcategories(response.data)
            })
    }, [id])

    function useBanner(category) {
        return category.id === parseInt(id)
    }

    const imageBanner = categories.find(useBanner)

    return (
        <Fragment>
            {
                imageBanner && <Banner 
                    img = { imageBanner.banner }
                />
            }
            <h1 style={{ marginLeft: '30px', color: '#75787B' }} >SUBCATEGORÍAS</h1>

            <section style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                height: '50vh'
            }}>
                {
                    subcategories.map(({ id, image }) => (
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
