import React, { Component } from 'react'
import axios from 'axios'

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
                        <div key={id}>
                            <h2>{name}</h2>
                            <img style={{ width: '150px', height: '150px'}} src={image} alt={name} />
                        </div>
                    ))
                }
            </div>
        )
    }
}
