import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../layouts/Layout'
import contactUsImg from '../../assets/images/contact-us.jpg'
import './contact.css'

function Contact() {
  return (
    <Layout>
      <section className="contact-section animated bounceIn container m-5">
        <div className="container">
          <div className="row">
            <div className="col-12 " style={{color:'rgb(9, 157, 181)'}}>
              <h3 className="contact-title">Contact Investii</h3>
            </div>
            <div className="col-lg-8 " style={{color:'rgb(9, 157, 181)'}}>
              <form id="new-recipe-form" className="form-horizontal my-form" >
                <div className="form-group mt-3 mb-3">
                  <label className="control-label col-sm-4" for="recipe-name">Email</label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="user-name"
                      placeholder="Entrer votre email ici" name="Recipe Cook time"
                  
                    />
                  </div>
                </div>

                <div className="form-group mt-3 mb-3">
                  <label className="control-label col-sm-5" for="recipe-name">Sujet</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="user-adresse"
                      placeholder="Enter un sujet ici"
                      name="Recipe Preparation time"
                    />
                  </div>
                </div>

                <div className="form-group mt-3 mb-3">
                  <label className="control-label col-sm-5" for="recipe-desc">Message</label>
                  <div className="col-sm-10">
                    <textarea
                      type="text"
                      className="form-control"
                      id="user-desc"
                      placeholder="Entrer le contenu de message"
                      name="Recipe Desc"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-info bouton">Envoyer</button>
                  </div>
                </div>
              </form>
            </div>
            <br /><br /><br />
            <div className="flip-card ">
              <div className="flip-card-inner">
                <div className="flip-card-front ">
                  <img src={contactUsImg} className="w-100 h-100" />
                </div>
                <div className="flip-card-back" style={{backgroundColor:'rgb(9, 157, 181)'}}>
                  <div className="media contact-info p-5 pb-0" style={{color:'white'}}>
                    <div className="media-body">
                      <span className="contact-info__icon">
                        <FontAwesomeIcon icon={faHome} style={{color:'white'}} />
                      </span>
                      <span style={{color:'white'}} >Tunis</span>
                      <p style={{color:'white'}} >mmeuble CYRYS LE GRAND 24 rue Cyrus Le grand le passage</p>
                    </div>
                  </div>
                  <div className="media contact-info style={{color:'white'}} ">
                    <div className="media-body">
                      <span className="contact-info__icon">
                        <FontAwesomeIcon icon={faPhone} style={{color:'white'}}/>
                      </span>
                      <span style={{color:'white'}}>+216</span>
                      <span style={{color:'white'}}>25918998 </span>
                    </div>
                  </div>
                  <div className="media contact-info mt-3 mb-3">
                    <div className="media-body">
                      <span className="contact-info__icon">
                        <FontAwesomeIcon icon={faMailBulk} style={{color:'white'}} />
                      </span>
                      <span style={{color:'white'}}>investii@investii.com.tn</span>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
