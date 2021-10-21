import React from 'react'
import { pushRotate as Menus } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import './Menu.css'
import logo from '../../../assets/logo_verissa.webp'

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '25px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#000'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: 'white',
        padding: '0',
        fontSize: '1em',
        overflow: 'none'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#fff',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
        top: '0',
        left: '0',
    }
}

export default function Menu() {
    return (
        <div className="container__menu" >
            <Menus styles={styles}>
                <div className="container-logo-30">
                    <img src={ logo } alt="Verissa Logo" />
                </div>
                <div className="container-menu">
                    <Link
                        to="/" >
                        <span className="title-section">
                            INICIO
                        </span>
                    </Link>
                </div>
                <div className="container-menu">
                    <span className="title-section">
                        Categorías
                    </span>
                    <div className="submenu">
                        <div className="submenu-link">
                            <Link
                                to="/subcategoria/5" >
                                Comercial
                            </Link>
                        </div>
                        <div className="submenu-link">
                            <Link
                                to="/subcategoria/2" >
                                Educación
                            </Link>
                        </div>
                        <div className="submenu-link">
                            <Link
                                to="/subcategoria/3" >
                                Heal Care
                            </Link>
                        </div>
                        <div className="submenu-link">
                            <Link
                                to="/categoria/7" >
                                Home Office
                            </Link>
                        </div>
                        <div className="submenu-link">
                            <Link
                                to="/subcategoria/1" >
                                Hotelería
                            </Link>
                        </div>
                        <div className="submenu-link">
                            <Link
                                to="/subcategoria/4" >
                                Industrial
                            </Link>
                        </div>
                        <div className="submenu-link">
                            <Link
                                to="/subcategoria/8" >
                                Corporativo
                            </Link>
                        </div>
                        <div className="submenu-link">
                            <Link
                                to="/categoria/9" >
                                Productos Especiales
                            </Link>
                        </div>
                        <div className="submenu-link">
                            <Link
                                to="/subcategoria/6" >
                                Residencial
                            </Link>
                        </div>
                    </div>
                </div>
            </Menus>
        </div>
    )
}
