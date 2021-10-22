import React, { useState, useEffect, Fragment } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from 'react-router';
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import './Producto.css'
import Info from '../../PageComponents/Info/Info';

const Producto = () => {

    const id = useParams().id;
    const [product, setProduct] = useState('')

    useEffect(() => {
        axios
            .get(`http://3.86.96.55/api/v1/producto/${id}`)
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
            <Container>
                <Row>
                    <Col md={6}>
                        <Row>
                            <div className="ProductView__img-container">
                                <img className="ProductView__img" src={image ? image : product.image} alt={product.title} />
                            </div>
                        </Row>
                        <Row>
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
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <h2 className="ProductView__info-title">{product.title && product.title.toUpperCase()}</h2>
                        </Row>

                        <Row>
                            <div className="ProductView__info">
                                <h2 className="ProductView__info-subtitle">Especificaciones</h2>
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
                                    {
                                        product.certifications && 
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
                                                    {
                                                        product.certifications && product.certifications.map(({ id, name, image }) => {
                                                            return <img key={ id } className="img-certificate" src={ image } alt={ name } />
                                                        })
                                                    }
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    }
                                </div>
                            </div>
                        </Row>
                        <Row>
                            {
                                product.subcategory && <h3 className="ProductView__info-subtitle">Tipo de uso</h3>
                            }
                            <div className="ProductView__img-carousell-sub">
                                {
                                    product.subcategory && product.subcategory.map(({ id, name, image }) => {
                                        return <img className="ProductView__img-carousell-use" src={image} alt={name} key={id} />
                                    })
                                }
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Info />
        </Fragment>
    )
}


export default Producto;