import React, { Fragment, useState, useEffect } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from 'react-router';
import axios from 'axios'

import './Producto.css'

const Producto = () => {

        const id = useParams().id;
        const [product, setProduct] = useState('')
        const imgCarousell = []

        if(product.image) {
            imgCarousell.push(product.image)
        }

        if(product.image1) {
            imgCarousell.push(product.image1)
        }

        if(product.image2) {
            imgCarousell.push(product.image2)
        }

        if(product.image3) {
            imgCarousell.push(product.image3)
        }

        useEffect(() => {
            axios
                .get(`http://localhost:8000/api/v1/producto/${id}`)
                .then(response => {
                    setProduct(response.data)
                })
        }, [id])

        const [image, setImage] = useState('')

        const handleClick = (img) => {
            setImage(img.target.src)
        }
        
        useEffect(() => {
            setImage('')
        }, [id])

        return (
            <Fragment>
               <div className="container-fluid ProductView">
                    <h2 className="ProductView__info-title">{product.title}</h2>
                    <figure className="image-container">
                        <img className="ProductView__img" src={image ? image : product.image} alt={product.title} />
                        <div className="ProductView__img-carousell">
                            <span onClick={handleClick}>
                                <img className="ProductView__img-carousell-min" src={product.image ? product.image : ''} alt={product.title} />
                                {
                                    product.image1 && <img className="ProductView__img-carousell-min" src={product.image1} alt={product.title} />
                                }
                                {
                                    product.image2 && <img className="ProductView__img-carousell-min" src={product.image2} alt={product.title} />
                                }
                                {
                                    product.image3 && <img className="ProductView__img-carousell-min" src={product.image3} alt={product.title} />
                                }
                            </span>
                        </div>
                    </figure>
                    <div className="ProductView__info">
                        <hr />
                        <p className="ProductView__info-description">{product.descripcion}</p>

                        <h2 className="ProductView__info-specs">Especificaciones</h2>
                        <div className="ProductView__info-accordion">
                            <Accordion className="accordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className="accordion-title">Características</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">
                                    <Typography className="accordion-desc">
                                        {product.features}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className="accordion-title">Medidas</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">
                                    <Typography className="accordion-desc">
                                        {product.measures}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className="accordion-title">Materiales</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">
                                    <Typography className="accordion-desc">
                                        {product.materials}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className="accordion-title">Color</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">
                                    <Typography className="accordion-desc">
                                        {product.colors}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className="accordion-title">Certificaciones</Typography>
                                </AccordionSummary>
                                <AccordionDetails className="accordion-details">
                                    <Typography className="accordion-desc">
                                        <img className="img-certificate" src={product.certifications} alt="Certificado" />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}


export default Producto;