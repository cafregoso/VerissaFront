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
                    <h2 className="ProductView__info-title">{product.Producto.toUpperCase()}</h2>
                    <figure className="image-container">
                        <img className="ProductView__img" src={image ? image : product.image} alt={product.title} />
                        <div className="ProductView__img-carousell">
                            {
                                telas[num].iGallery.map(({ id, img }) => {
                                    return <span key={id} onClick={handleClick}><img className="ProductView__img-carousell-min" src={img} alt={img} /></span>
                                })
                            }
                        </div>
                    </figure>
                    <div className="ProductView__info">
                        <hr />
                        <p className="ProductView__info-description">{product.Descripcion}</p>

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
                                        {product.Caracteristicas}
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
                                        {product.Medidas}
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
                                        {product.Materiales}
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
                                        {
                                            telas[num].Colores.map(({ color, img }) => (
                                                <span key={img} className="accordion-colors">
                                                    <img className="img-certificate telas" src={img} alt="color" />
                                                    <span>{color}</span>
                                                </span>
                                            ))
                                        }
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
                                        <img className="img-certificate" src={product.Certificaciones} alt="Certificado" />
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