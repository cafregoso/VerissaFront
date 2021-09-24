import React, { Component, Fragment } from 'react'
import Footer from '../../PageComponents/Footer/Footer'
import Header from '../../PageComponents/Header/Header'
// import Footer from '../../PageComponents/Footer/Footer'

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </Fragment>
        )
    }
}

export default Layout
