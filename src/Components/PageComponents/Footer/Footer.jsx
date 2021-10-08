import React from 'react'

import face from '../../../assets/face.svg'
import insta from '../../../assets/insta.svg'
import linkedin from '../../../assets/linkedin.svg'

import './Footer.css'

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_box description">
                <img style={{ width: '150px' }} src="/img/assets/logo_verissa_2.png" alt="Logo Verissa" />
                <p style={{ margin: '5px 0', color: '#555', width: '330px', maxWidth: '600px' }}>
                    Nuestra experiencia nos ha permitido cubrir las más altas
                    expectativas de nuestros clientes. Cada proyecto a contribuido a
                    crecimiento y consolidación de nuetra empresa.
                </p>
            </div> 
            <div className="footer_box contact">
                <p>
                    <strong style={{ color: '#555' }}>TELÉFONO: </strong>
                    <a style={{ color: '#555', textDecoration: 'none' }} href="tel:8112312523">(81) 1231-2523</a>
                </p>
                <p>
                    <strong style={{ color: '#555' }}>TELÉFONO: </strong>
                    <a style={{ color: '#555', textDecoration: 'none' }} href="tel:8113587217">(81) 1358-7217</a>
                </p>
                <p>
                    <strong style={{ color: '#555' }}>EMAIL: </strong>
                    <a style={{ color: '#555', textDecoration: 'none' }} href="mailto:contacto@verissa.mx">CONTACTO@VERISSA.MX</a>
                </p>
            </div> 
            <div className="footer_box social">
                <div className="footer_icon">
                    <img className="footer_logo" src={face} alt="Facebook" />  
                </div>
                <div className="footer_icon">
                    <img className="footer_logo" src={insta} alt="Instagram" />  
                </div>
                <div className="footer_icon">
                    <img className="footer_logo" src={linkedin} alt="LinkedIn" />  
                </div>
            </div> 
        </div>
    )
}
