import React from 'react'

import face from '../../../assets/face.svg'
import insta from '../../../assets/insta.svg'
import linkedin from '../../../assets/linkedin.svg'

import './Footer.css'

export default function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_box description">
                <h4>Description</h4>
            </div> 
            <div className="footer_box contact">
                <h4>Contact information</h4>
            </div> 
            <div className="footer_box social">
                <div>
                    <img className="footer_logo" src={face} alt="Facebook" />  
                </div>
                <div>
                    <img className="footer_logo" src={insta} alt="Instagram" />  
                </div>
                <div>
                    <img className="footer_logo" src={linkedin} alt="LinkedIn" />  
                </div>
            </div> 
        </div>
    )
}
