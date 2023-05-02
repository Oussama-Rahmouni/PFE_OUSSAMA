import React from 'react'
import { Carousel } from 'react-bootstrap'
import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../../layouts/Layout'
import fibre1Img from '../../assets/images/fibre.png'
import fibre2Img from '../../assets/images/fibree.png'
import fibre3Img from '../../assets/images/fibressss.jpg'
import fibre4Img from '../../assets/images/fibressss.jpg'
import samitelImg from '../../assets/images/samitel.jpg'
import './enterprisecontact.css'

function EnterpriseContact({ name }) {
  return (
    <Layout>
      <div className="container mt-sm-5 bg-light ">
        <div className="row">
          <div className=" col-sm-6 ">
            <h1 className="nomProduit pt-3" >{name || 'Fibre optique matricielle'}</h1>
<div id="carouselExampleIndicators" className="carousel slide w-100" data-bs-ride="carousel">
  <div className="carousel-indicators" style={{backgroundColor: 'rgb(9, 157, 181)'}}>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
  </div>
  <div className="carousel-inner pb-5" style={{position: 'relative', left: '13%'}}>
    <div className="carousel-item active">
      <img src={fibre1Img} className="d-flex w-75 " alt="..." />
    </div>
    <div className="carousel-item">
      <img src={fibre2Img} className="d-flex w-75 " alt="..." />
    </div>
    <div className="carousel-item">
      <img src={fibre3Img} className="d-flex w-75  " alt="..." />
    </div>
    <div className="carousel-item">
      <img src={fibre4Img} className="d-flex w-75 " alt="..." />
    </div>
  </div>
  <button className="  carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon boutoncarousel " aria-hidden="true"  />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className=" carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon boutoncarousel ms-2" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



            
            {/*
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-flex w-75"
                  src={fibre1Img}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-75"
                  src={fibre2Img}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-75"
                  src={fibre3Img}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-flex w-75"
                  src={fibre4Img}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>
*/}




            <div className=" descriptif mb-3 p-4" style={{ border: '2px solid rgb(9, 157, 181)'}}>
              <h4>Descriptif</h4>
              <p>M6 fibre optique réfléchissante coaxiale filetée, avec terminal d'émission ∮2.1 * 1 et borne de réception ∮0.25 * 16..</p>
              <h4>Catégorie</h4>
              <p>Batiments et construction</p>
              <h4>Date d'expiration</h4>
              <p>11/03/2022</p>
              <h4>Stock</h4>
              <p>3550</p>
            </div>
          </div>

          <div className="col-sm-6  ">
            <div className="cadre ms-5 mt-3 mb-3 pt-3 p-5" style={{ border: '2px solid rgb(9, 157, 181)', width: '75%' }}>
              <h1 className=" text-center d-flex justify-content-center">Contacter l'entreprise</h1>
              <img src={samitelImg} className="samitel  w-100 ps-2 pe-2 pt-0 pb-0 " />
              <button onclick="show_hide()" className="contact btn w-100">
                <FontAwesomeIcon icon={faPhone} /> +216 71 223 455
              </button>
              <button className="contact btn w-100">
                <FontAwesomeIcon icon={faLink} />  Site internet
              </button>
              <button className="contact btn w-100">
                <FontAwesomeIcon icon={faEnvelope} /> Envoyer un message
                </button>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default EnterpriseContact
