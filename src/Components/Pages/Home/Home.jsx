import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Card from '../../PageComponents/Card/Card'
import Destacado from '../../PageComponents/Destacado/Destacado'
import Footer from '../../PageComponents/Footer/Footer'

export default class Home extends Component {
    state = {
        categories: [],
        productos: [],
        loading: false,
    }

    componentDidMount() {
        this.get_data()
    }

    get_data() {
        axios
            .get('http://localhost:8000/api/v1/')
            .then(response => {
                this.setState({
                    categories: response.data,
                    loading: true,
                })
            })
            .then(res => {
                this.setState({
                    loading: false,
                })
            })
            
            axios
                .get('http://localhost:8000/api/v1/productos/1')
                .then(response => {
                    this.setState({
                        productos: response.data.slice(0, 4),
                    })
                })
    }

    render() {
        return (
            <div className="homeContainer">
                <h1 style={{ marginLeft: '30px', color: '#75787B' }} >CATEGORÍAS</h1>

                <section className="categoriesContainer" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {
                        this.state.categories.map(({ id, image }) => {
                            if (id === 7) {
                                return  <Link
                                    style={{ textDecoration: 'none', color: '#000', }}
                                    to={`/categoria/${id}`}
                                    key={id}
                                >
                                    <Card 
                                        img={image}
                                    /> 
                                </Link>
                            }
                            if (id === 9) {
                                return  <Link
                                    style={{ textDecoration: 'none', color: '#000', }}
                                    to={`/categoria/${id}`}
                                    key={id}
                                >
                                    <Card 
                                        img={image}
                                    /> 
                                </Link>
                            }
                            return  <Link
                                style={{ textDecoration: 'none', color: '#000', }}
                                to={`/subcategoria/${id}`}
                                key={id}
                            >
                                <Card
                                    img={image}
                                /> 
                            </Link>
                        })
                    }
                </section>

                <h2 style={{ margin: '25px 15px', color: '#75787B' }} >PRODUCTOS DESTACADOS</h2>

                <section className="destacadosContainer" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {
                        this.state.productos.map(({ id, image, title }) => (
                            <Link
                                style={{ textDecoration: 'none', color: '#000', }}
                                to={`/producto/${id}`}
                                key={id}
                            >
                                <Destacado
                                    img={image}
                                    name={title}
                                />
                            </Link>
                        ))
                    }
                </section>
                <Footer />
            </div>
        )
    }
}