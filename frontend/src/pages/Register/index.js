import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layouts/Layout'
import investiiImg from '../../assets/images/investii.png'
import './register.css'


function Register() {
  return (
    <Layout>
      <div className="container-fluid">
      <div className="row d-flex justify-content-center mt-3 mb-3">
      <div className="col-md-2 ">
                
      </div>

      <div className="col-md-8  ">
        <div className="blueBox p-5  w-100 " >
          <div className="row">

             <div className="col-lg-8 col-sm-12 ">
                <div className="primaryBox    col-sm-12  pt-5 pb-5 ps-4 pe-4 d-flex justify-content-center   rounded   ">
                  <div className="white-panel">
                    <div className="login-show show-log-panel">
                      <h2 className="inscription ">Inscription</h2>
                      <input type="text" placeholder=" Nom" />
                      <input type="text" placeholder=" Prénom" />
                      <input type="email" placeholder="Adresse email" />
                      <input type="text" placeholder="Pays" />
                      <input type="tel" placeholder="Numéro de téléphone" />
                      <input type="password" placeholder="Mot de passe" />
                      <input type="password" placeholder="Confirmation de mot de passe" />
                      <input type="button" value="valider" />
                    </div>
                  </div>
                </div>
             </div>

             <div className="col-lg-4 col-sm-12">
                <div className="rightDiv  rounded   h-75 w-100    ">
                   <h3 className="mt-4">Vous n'avez pas un compte?</h3>
                   <h6 className="">Créez votre compte</h6>
                   <Link to="/register">
                   <input className="rounded inscrit  w-100 mt-2 mb-4 p-2"
                   type="button" value="S'inscrire" />
                   </Link>
                </div>
              </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
    </Layout>
  )
}

export default Register
