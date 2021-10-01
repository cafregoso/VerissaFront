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