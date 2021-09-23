import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Header.css'

export default function Header() {
    return (
        <div className="layout_header">
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <div className="layout_header-top">
                            <a className="layout_header-top-a" href="tel:8112312523">(81) 1231-2523</a>
                            <a className="layout_header-top-a" href="tel:8113587217">(81) 1358-7217</a>
                            <a className="layout_header-top-a" href="mailto:contacto@verissa.mx">CONTACTO@VERISSA.MX</a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="layout_header-image">
                        <img src="/img/assets/logo_verissa_2.png" alt="Logo Verissa" />
                    </div>
                </Row>
            </Container>
        </div>
    )
}
