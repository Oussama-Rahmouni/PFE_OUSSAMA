import React from 'react'
import { faBell, faEdit, faEnvelope, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import investiiImg from '../assets/images/investii.png'
import avatarIcon from '../assets/images/avatar.jpg'
import { Link } from 'react-router-dom'





function ProfileLayout({ children }) {
  return (
    <div className="container-fluid pt-lg-5 pb-lg-5" style={{backgroundColor:'white'}}>
    
    <div className="row ">
      <div className="col-lg-2 "></div>
      <div className="col-lg-8 col-sm-12 p-0 ">
        {/*try */}
           
<div className="container bigBox  bg-white p-0"  >
<nav className="you navbar  navbar-expand-lg " style={{backgroundColor:'rgb(9, 157, 181)'}} >

<a className="navbar-brand" href="#">
  <Link to="/home"><img src={investiiImg} className="ms-2" 
  style={{ height: '50px', width: '150px' }} /></Link>
</a>
<div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item dropdown">

    <button className="dropdown btn ms-1 me-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <FontAwesomeIcon icon={faEnvelope} style={{color:'white'}}/>
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li style={{ height: '100px' }}></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Voir tous les messages</a></li>
    </ul>
    <button className="dropdown btn ms-1 me-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <FontAwesomeIcon icon={faBell} style={{color:'white'}}/>
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li style={{ height: '100px' }}></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Voir tous les notifications</a></li>
    </ul>

    <button className="btn triangle ms-1 me-1 dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
      <img src={avatarIcon} className="avatar" /> 
    </button>
    <ul className=" items dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
      <li>
      <Link to="/profile/ichraf" className="dropdown-item">  <FontAwesomeIcon icon={faUserAlt} /> Mon profil </Link>
      </li>
      <li>
       <Link to="/profile/form/ichraf" className="dropdown-item"> <FontAwesomeIcon icon={faEdit} /> Modifier mon profil</Link>
      </li>
      <li>
       <Link to="/home" className="dropdown-item" > <FontAwesomeIcon icon={faSignOutAlt} /> Se déconnecter</Link>
      </li>
    </ul>

    </li>
 </ul>
</div>

</nav>

      
         
   <div className="row secondRow " >
         <div className="col-lg-3 col-sm-5 " style={{backgroundColor:'rgb(7, 45, 99)'}}  >
          
         <ul className="verticalNav  nav flex-column ms-2 m-5 me-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Accueil</Link>
            </li><hr />
            <li className="nav-item">
              <Link className="nav-link" to="/enterprise/form/name">Votre entreprise</Link>
            </li><hr />
            <li className="nav-item">
              <Link className="nav-link" to="/product/form/name">Vos produits</Link>
            </li><hr />
            <li className="nav-item">
              <a className="nav-link" href="#">Statistiques</a>
            </li><hr />
            <li className="nav-item">
              <a className="nav-link" href="#">Événements</a>
            </li><hr />
            <li className="nav-item">
              <a className="nav-link" href="#">Actualités</a>
            </li><hr />
          </ul>

          </div>

          {children}
  </div>
  </div>
        {/*try */}


      </div>
      <div className="col-2"></div>
    </div>
    
    
        
      
        
        

        

        

      
     

      
        
        
        
      
      </div> 
      
      
    
  )
}

export default ProfileLayout