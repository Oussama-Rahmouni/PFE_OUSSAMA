import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import investiiImg from '../assets/images/investii.png'

function NavBar() {

  const location = useLocation()

  console.log(location);
  return (
    <>

     {
       (location.pathname !== "/login") && (location.pathname !== "/register")  ?
       <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img alt="investiLogo" src={investiiImg}
           className="logo" style={{ height: '70px', width: '200px' }} />
          <form className="d-block mt-3">
           <Link to="/login" className="btn"
            style={{backgroundColor:'rgb(9, 157, 181)',color:'white'}}>Se connecter</Link>
            &nbsp;
          <Link to="/register" className="btn" style={{backgroundColor:'rgb(9, 157, 181)',color:'white'}}>
            S'inscrire</Link> 
          </form>
        </div>
      </nav> : ""
     }

      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: 'rgb(9, 157, 181)' }}>
        <div className="navbarMobile container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <i className="fas fa-bars" style={{ color: '#ffff' }}></i> */}
            <FontAwesomeIcon icon={faBars} style={{ color: '#ffff' }} />
            
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item align-items-end">
              <Link className="nav-link" to="/home">Accueil</Link>

              </li> &nbsp; &nbsp;
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Secteurs d'activités
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item">Action</a></li>
                  <li><a className="dropdown-item" >Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item">Something else here</a></li>
                </ul>
              </li> &nbsp; &nbsp;
              <li className="nav-item">
              <Link className="nav-link" to="/about">À propos de nous</Link>
              </li> &nbsp; &nbsp;
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li> &nbsp; &nbsp;
            </ul>
           {
             
            location.pathname !== "/home" && 
          <div>    
            <form class="d-inline-flex ">
                  <input class="form-control me-1 "
                   type="search" placeholder="Rechercher" aria-label="Search" />
                </form>
                <FontAwesomeIcon icon={faSearch} className="ms-1" style={{ color: '#ffff' }} />
</div>
                 
           }
           
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
