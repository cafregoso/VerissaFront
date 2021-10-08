import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <div className="layout_header">
            <Container fluid>
                <Row>
                    <div className="layout_header-contact" >
                        <a href="tel:8112312523">(81) 1231-2523</a>
                        <a href="tel:8113587217">(81) 1358-7217</a>
                        <a href="mailto:contacto@verissa.mx">CONTACTO@VERISSA.MX</a>
                    </div>
                </Row>
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
