import React from 'react'
import footerImg from '../assets/images/footer.png'





function Footer() {
  return (
    <div>
    <footer className=" text-center text-lg-start mt-1 " style={{ backgroundColor: 'rgb(9, 157, 181)' }}>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
            <img alt="investtiFooter" src={footerImg} className="logo" />
            <p style={{ fontSize : "13px"}} className="text-light mt-4">
              Grâce à nos solutions B2B, votre entreprise peut être trouvée sur Internet,<br />
              ce qui vous permet d'attirer de nouveaux visiteurs et des acheteurs potentiels<br />
              vers votre site web. Vous pouvez accéder à vos statistiques et gérer votre<br />
              contenu pour améliorer votre visibilité.
            </p>
            
            
          

          </div>
          <div className="col-lg-4 col-md-6" >
            <h5 className="text-uppercase mb-4 text-light">Nos partenaires</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light" style={{textDecoration:'none'}}>made-in-tunisia.net</a>
              </li>
              <li>
                <a href="#!" className="text-light" style={{textDecoration:'none'}}>made-in-algeria.com</a>
              </li>
              <li>
                <a href="#!" className="text-light" style={{textDecoration:'none'}}>maroc-plaza.com</a>
              </li>
              <li>
                <a href="#!" className="text-light" style={{textDecoration:'none'}}>batimaghreb.com</a>
              </li>
            </ul>
            <h6 className="text-light">S'inscrire à nos newsletters</h6>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="adresse E-mail" aria-label="Search" />
              <button className="btn" type="submit" style={{backgroundColor:'rgb(7,45,99)',color:'white'}}>Envoyer</button>
            </form>
          </div>
        </div>
      </div>

     
    </footer>
    <div className="subFooter text-center p-3 mt-1 " style={{ color : "white",backgroundColor : "rgb(7, 45, 99)"}}>
        © Investii, Tous droits réservés 2021:
        <a className="text-light" href="https://mdbootstrap.com/"> Politique de Confidentialité</a>
      </div>
      </div>
  )
}

export default Footer
