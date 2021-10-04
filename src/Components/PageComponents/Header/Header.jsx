import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <div className="layout_header">
            <Container fluid>
                <Row>
                    <div className="layout_header-image">
                        <Link
                            style={{ textDecoration: 'none', }}
                            to={`/`}
                        >
                            <img src="/img/assets/logo_verissa_2.png" alt="Logo Verissa" />
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
