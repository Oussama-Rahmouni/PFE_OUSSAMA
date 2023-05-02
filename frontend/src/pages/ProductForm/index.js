import React from 'react'
import ProfileLayout from '../../layouts/ProfileLayout'

import './productform.css'

function ProductForm() {
  return (
    <ProfileLayout>
      <div className="col-lg-9">
      <h2 className="text-center mt-5 mb-4" style={{color:'rgb(9, 157, 181)'}}>Ajouter votre produit</h2>
      <div className="pro  col-lg-10  ms-lg-5  ">
      
        <div className=" upload form-input">
          
          <div className="formulaire  p-2">
          <div className=" upload  form-group " >
           <label className="p-2" for="file-ip-1">Télécharger une photo</label>

         </div>
            <input type="text" placeholder=" Nom du produit" />
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
            <input type="email" placeholder="Catégorie" />
            <h6 style={{ color: 'white' }}>Date d'expiration</h6>
            <input className="form-control text-secondary" type="date" value="jj/mm/aaaa" id="example-date-input" />
            <input type="text" placeholder="Stock" />
          </div>
        </div>
        <input className="ajouter w-100 mb-5" type="button" value="Ajouter" />
      </div>
      </div>
    </ProfileLayout>
  )
}

export default ProductForm
