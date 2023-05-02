import React from 'react'
import Layout from '../../layouts/Layout'
import okImg from '../../assets/images/ok.jpeg'
import myFunction from './about'
import './about.css'
import './about.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faLock, faUserTie } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    //<Layout>
    <>
      <section className="aboutus-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="aboutus">
                <h2 className="aboutus-title">À propos de nous</h2>
                <p className="aboutus-text">Investii est une plateforme B2B en ligne utilisée pour fournir des produits et des opportunités commerciales.</p>
                <p className="aboutus-text">Investii rassemble une communauté d'industriels, de commerçants et de prestataires de services tunisiens sur une seule plateforme pour présenter et promouvoir les produits et services fournis en Tunisie.</p>
                <p className="aboutus-text">En tant que fournisseur ou prestataire de services, une entreprise tunisienne enregistrée (service gratuit ou payant) dispose d'un espace site Web personnalisé<span id="dots">...</span>
                <span id="more"> &nbsp; pouvant afficher et mettre en valeur ses produits, services et savoir-faire pour créer un portefeuille virtuel et renseigner diverses informations professionnelles.</span></p>
                <p className="aboutus-text" id="objectif">Aider et accompagner les fournisseurs tunisiens à faire des affaires ensemble dans le même espace en ligne, tel est l'objectif de Investii</p>
              </div>
              <button className="aboutus-more" onClick={()=> myFunction()} id="myBtn" >Lire la suite</button>

            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="aboutus-banner">
                <img src={okImg} className="w-100" alt="" />
              </div>
            </div>

            <div className="BOX col-md-5 col-sm-6 col-xs-12 pt-5   ">
              <div className="feature p-5 pb-3">
                <div className="feature-box">
                  <div className="clearfix">
                    <div className="iconset ">
                      <FontAwesomeIcon icon={faDatabase}/>
                    </div>
                    <div className="feature-content">
                      <span>Une qualité de la data</span>
                    </div>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="clearfix">
                    <div className="iconset ">
                      <FontAwesomeIcon icon={faLock}/>
                    </div>
                    <div className="feature-content">
                      <span>Un paiement sécurisé</span>
                    </div>
                  </div>
                </div>
                <div className="feature-box">
                  <div className="clearfix">
                    <div className="iconset ">
                      <FontAwesomeIcon icon={faUserTie}/>
                    </div>
                    <div className="feature-content">
                      <span>Une vraie expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    //</Layout>
  )
}

export default About
