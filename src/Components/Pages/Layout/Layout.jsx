import React, { Component, Fragment } from 'react'
import Header from '../../PageComponents/Header/Header'
// import Footer from '../../PageComponents/Footer/Footer'

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {this.props.children}
            </Fragment>
        )
    }
}

export default Layout
