import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Card from '../../PageComponents/Card/Card'

export default class Home extends Component {
    state = {
        categories: [],
        image: [],
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
    }


    render() {
        return (
            <div>
                <h1>Home</h1>
                {
                    this.state.categories.map(({ id, image, name }) => (
                        <Link
                            style={{ textDecoration: 'none', color: '#000', }}
                            to={`/subcategoria/${id}`}
                            key={id}
                        >
                            <Card 
                                key={id}
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
}
