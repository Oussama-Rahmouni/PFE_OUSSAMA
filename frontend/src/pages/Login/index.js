import React from 'react'
import Layout from '../../layouts/Layout'
import { Link } from 'react-router-dom'
import './login.css'
import  MostEntreprise from '../MostEnterprise/index';
import { data } from 'jquery';
const mydata= [
  {title : "agrecilture" , numbers : 20} ,
  {title : "medcine" , numbers : 10} ,
  {title : "transport" , numbers : 30} ,
]
function Login() {
  return (
    <Layout>
    
     <div className="container-fluid">
     {
    mydata.map(_item => {
      <MostEntreprise data={_item} />
   })
}
          <div className="row  d-flex justify-content-center mt-3 mb-3">
          
             <div className="col-md-8 ">
      
      <div className="blueBox p-5  w-100  "   >
      <div className="row">
      <div className="col-lg-8 col-sm-12 ">
        <div className="primaryBox    col-sm-12  pt-5 pb-5 ps-4 pe-4 d-flex justify-content-center   rounded   ">
        
          <div className="white-panel ">
            <div className="login-show   show-log-panel">
              <h2 className="connexion ">Connexion</h2>
              <input type="text" className="rounded w-100 " placeholder="Adresse e-mail" />
              <input type="password" className="rounded w-100" placeholder="Mot de passe" />
              <input type="button" className="rounded w-100" value="Connexion" />
              <a className="text-center d-flex justify-content-center" href="">Adresse e-mail oubliée ?</a>
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
           </Link></div>
           </div>
          
      </div>
      </div>
      </div>
      
      </div>
      </div>

    </Layout>
  )
}

export default Login
