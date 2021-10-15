import React from 'react'
import { Container, Row, DropdownButton, Dropdown, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'

import logo from '../../../assets/logo_verissa_2.png'

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
                        <a
                            style={{ textDecoration: 'none', }}
                            href="https://verissa.mx/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={logo} alt="Logo Verissa" />
                        </a>
                    </div>
                    <div className="layout_header-link">
                        <Link
                            style={{
                                textDecoration: 'none',
                                color: '#3d0010',
                                fontSize: '1.6rem'
                            }}
                            to={`/`}
                            >
                            Inicio
                        </Link>
                    </div>
                    <div className="layout_header-link">
                        <DropdownButton
                            title="CATEGORÍAS"
                            variant="secondary"
                            >
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/subcategoria/5'}
                                >
                                    Comercial
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/subcategoria/2'}
                                >
                                    Educación
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/subcategoria/3'}
                                >
                                    Healt Care
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/categoria/7'}
                                >
                                    Home Office
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/subcategoria/1'}
                                >
                                    Hotelería
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/subcategoria/4'}
                                >
                                    Industrial
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/subcategoria/8'}
                                >
                                    Corporativo
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/categoria/9'}
                                >
                                    Productos Especiales
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#555',
                                    }}
                                    to={'/subcategoria/6'}
                                >
                                    Residencial
                                </Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </div>
                </Row>
            </Container>
        </div>
    )
}