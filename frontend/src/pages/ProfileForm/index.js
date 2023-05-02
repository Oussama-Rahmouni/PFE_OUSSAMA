import React,{useState} from 'react'
import ProfileLayout from '../../layouts/ProfileLayout'
import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'
import AvatarEditor from 'react-avatar-editor'
import $ from "jquery";
import './profileform.css'


$(document).on("click", ".browse", function() {
  let file = $(this).parents().find(".file");
  file.trigger("click");
});

$('input[type="file"]').change(function(e) {
  let fileName = e.target.files[0].name;
  $("#file").val(fileName);
});
let reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("preview").src = e.target.result;
  };


const handleSelect = (country) => {
  console.log(country)
    }
function ProfileForm() {
 
  

  return (
    <ProfileLayout>
   <div className="col-lg-9 "> 
   
   <h2 className="text-center mt-5 mb-4" style={{color:'rgb(9, 157, 181)'}}>Modifier votre profil</h2>
  <form className=" p-lg-5 pt-lg-0 p-sm-0 pt-sm-0 ">
    <div className="form-row profileForm  mt-0  m-5 mb-0 col-lg-10 " style={{backgroundColor:'rgb(7, 45, 99)'}}>
    <div className=" upload m-2  form-group">
    <label className="p-2" for="file-ip-1">Télécharger une photo</label>

    </div>
      <div className="form-group m-2 ">
       
        <input type="text" className="form-control"  placeholder="Nom et prénom" />
      </div>
      <div className="form-group m-2 ">
        
        <input type="email" className="form-control"  placeholder="Adresse e-mail" />
      </div>
    
    <div className="form-group m-2">
     
      <input type="tel" className="form-control"  placeholder="Numéro de téléphone" />
    </div>

    <div className="form-group m-2 ">
    <ReactCountryDropdown onSelect={handleSelect} className="form-control"  />
    </div>


    <div className="form-group m-2">
     
      <input type="password" className="form-control"  placeholder="Mot de passe" />
    </div>

    <div className="form-group m-2">
     
     <input type="password" className="form-control"  placeholder="Confirmer votre mot de passe" />
   </div>
   </div>
    
    <button type="submit" className=" enregistrerButton btn col-lg-10 mt-2 mb-5 ms-5">Enregistrer</button>
  </form> 



  
  </div>


      

    </ProfileLayout >
    
  )
}

export default ProfileForm
