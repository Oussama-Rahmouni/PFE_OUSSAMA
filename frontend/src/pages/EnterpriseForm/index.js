import React from 'react'
import ProfileLayout from '../../layouts/ProfileLayout'

import './enterpriseform.css'

function EnterpriseForm() {
  return (
    <ProfileLayout>
      <div className="col-lg-9 " >
      <h2 className="text-center mt-5 mb-4" style={{color:'rgb(9, 157, 181)'}}>Ajouter votre entreprise</h2>
      
     
        <div className="pro  col-lg-10 ms-lg-5  ">
        <form className="inputEnterprise p-2 " style={{backgroundColor:'rgb(7, 45, 99)'}}>
        
         
         <div className=" upload  form-group " >
           <label className="p-2" for="file-ip-1">Télécharger une photo</label>

         </div>
          <input type="text" placeholder="Nom de l'entreprise" />
          <input type="text" placeholder="Numéro de siret" />
          <input type="text" placeholder="Dénomination sociale" />
          <input type="text" placeholder="Secteur d'activité" />
          <input type="tel" placeholder="Fax" />
          <input type="password" placeholder="Site web" />
          <input type="text" placeholder="Tél" />
          <input type="text" placeholder="Code postal" />
          <input type="text" placeholder="Adresse" />
          <input type="text" placeholder="Adresse email" />
          </form>
          <button className="ajouter w-100   ">
            Ajouter
            </button>
        </div>
        
        </div>
      
    </ProfileLayout>
  )
}

export default EnterpriseForm
