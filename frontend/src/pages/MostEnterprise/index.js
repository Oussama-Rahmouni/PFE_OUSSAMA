import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import carotImg from '../../assets/images/carot.jpg'
import bayarLogo from '../../assets/images/bayar.png' 
import agoulLogo from '../../assets/images/agoul.png'
import clayeoLogo from '../../assets/images/clayeo.png'
import kintcomLogo from '../../assets/images/kintcom.png'
import '../MostEnterprise/style.css'

import React from 'react'
import Layout from '../../layouts/Layout'

// TODO: use industries%20agroalimentaires template.
function MostEnterprise() {
  return (
    <Layout>

      <div className="container mt-sm-5">
        <div className="row">
          <div className=" col-sm-8 bg-light">
            <h1 className="title mt-5 mb-4 m-5">Agriculture</h1>
            <img alt='' src={carotImg} className="huile mt-0 m-5 w-75" />

           <div className=" w-75 mb-5">
            <div className="circles p-5 me-2  ">
            <h3 className="  text-center " >
              11378
              </h3>
              <h6 className="text-center ">
              Entreprises <br></br>
              enregistrés
              </h6>
            
                      
            </div>
            <div className="circles p-5  ">
            <h3 className="text-center">
20% </h3>
              <h6 className="text-center">
              Fabricant<br></br>
               Producteur
               </h6>
               </div>
               </div>
            

            <h4 className=" ms-5">Et VOTRE entreprise, est-elle référencée dans ce secteur?</h4>
            <button className=" bouton btn w-75 mt-3 ms-5">Inscrire mon entreprise</button>

            <ul className="list-group w-75 mt-4 ms-5">
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                  Agriculture - import-export
              </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                  Animaux à fourrure - élevage
                  </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    Plantes textiles
                  </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                      Fruits et légumes - import-export
                  </li>
              <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                        Céréales et grains
                  </li>
            </ul>
            <button className="bouton résultats btn mt-3 mb-3 ms-5">Voir les résultats</button>
          </div>

          <div className="col-sm-4 bg-light">
            <br /><br />
            <h1 className="consultés mb-4">Entreprises les plus consultés du secteur</h1>
            <div className="card logos  mb-4" style={{ width: '20rem' }}>
              <div className="card-body">
                
                <img alt='' className="" src={bayarLogo} style={{ width: '80px', height: '60px' }} />
                <hr />
                <img alt='' src={agoulLogo} style={{ width: '60px', height: '60px' }} />
                <hr />
                <img alt='' src={clayeoLogo} style={{ width: '60px', height: '50px' }} />
                <hr />
                <img alt='' src={kintcomLogo} style={{ width: '100px', height: '80px' }} />
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MostEnterprise

