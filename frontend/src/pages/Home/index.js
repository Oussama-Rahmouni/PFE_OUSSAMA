import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'
import Layout from '../../layouts/Layout'
import Pub from './home'
import courbeImg from '../../assets/images/courbe.jpg'
import agricultureImg from '../../assets/images/agriculture.jpg'
import entrepriseImg from '../../assets/images/entreprise.jpg'
import huileImg from '../../assets/images/huile.jpg'
import buildingImg from '../../assets/images/building.jpg'
import carotImg from '../../assets/images/carot.jpg'
import megaPaveSofakImg from '../../assets/images/2176_mega-pave-sofak.gif'
import pubImg from '../../assets/images/pub.gif'
import spriteImg from '../../assets/images/sprite_logo_grey.png'
import samsungImg from '../../assets/images/Samsung.png' 
import safariImg from '../../assets/images/Safari.png'
import nestléImg from '../../assets/images/Nestlé.png'
import sonyImg from '../../assets/images/Sony.png'
import vistaImg from '../../assets/images/VistaTalks.png'
import stetoscopeImg from '../../assets/images/stétoscope.jpg'
import fibre from '../../assets/images/fibre.png'
import briqueImg from '../../assets/images/brique.png'
import wardaImg from '../../assets/images/warda.jpg'
import foodImg from '../../assets/images/food.jpg'
import batterieImg from '../../assets/images/batterie.png'
import jiftexImg from '../../assets/images/jiftex.jpg'
import laboImg from '../../assets/images/labo.jpg'
import fibres from '../../assets/images/fibres.jpg'
import boite from '../../assets/images/boite2.jpg'
import grue from '../../assets/images/grue.jpg'
import ceinture from '../../assets/images/ceinture.jpg'
import fenetre from '../../assets/images/fenetre2.jpg'
import superdiet from '../../assets/images/superdiet.jpg'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinTongue, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import SearchEngine from '../../components/SearchEngine'

let fakeData = [];
async function  getFakeData(){
  await fetch('https://fakestoreapi.com/products')
 .then(res=>res.json())
 .then(json=>  fakeData = json)

console.log("our data ",fakeData)
}

function SearchInput(e){

  console.log("AAA");
  let inputData = document.getElementById("search").value;
  console.log(inputData);
  let newData = fakeData.filter(_e => (_e.category == inputData)||(_e.title== inputData));
  console.log(newData);
  
}
getFakeData();



function About() {

  return (
    <Layout>
    
      
      <div id="carouselExampleSlidesOnly" class="carouselGlobale carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
        
              <div class="carousel-item active">
                <img  src={courbeImg} class="w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={agricultureImg} class="w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={entrepriseImg} class="w-100" alt="..." />
              </div>
              <div class="container position-relative d-flex searchCarousel justify-content-center">
                  <input class="form-control me-1 " id="search" type="search" placeholder="Rechercher" aria-label="Search" />
                  <button class="btn"  type="submit" onClick={()=>SearchInput()}  style={{ backgroundColor:" rgb(9, 157, 181)",color: "#ffff"}}>Rechercher</button>
              </div>
            </div>
          </div>
 
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-lg-2  mt-2 pt-5 hidden-div " style={{ backgroundColor: "rgba(77, 77, 77, 0.062)" }}>
            <h4 className="actualité">Actualités</h4>
            <a className="tous" href="#"> <h6>Voir tous les actualités</h6></a>
            <hr />
            <div className="scrolling">
              <div>
                {
                  [
                    {
                      img: briqueImg,
                      title: "Découvrez la gamme de brique de Jemmel",
                      classImg: 'brique',
                      classH6: 'yes'
                    },
                    {
                      img: wardaImg,
                      title: "Installez le système d'extraction MaghrebCooling",
                      classImg: 'warda',
                      classH6: 'no'
                    },
                    {
                      img: foodImg,
                      title: "Food & Beverage Networking Hub 2020",
                      classImg: 'warda',
                      classH6: 'no'
                    },
                    {
                      img: batterieImg,
                      title: "Traitement de Batterie de traction sur Site",
                      classImg: 'warda',
                      classH6: 'no'
                    },
                    {
                      img: jiftexImg,
                      title: "JIFTEX POLYMERS spécialisées dans la fabrication de polymère",
                      classImg: 'warda',
                      classH6: 'no'
                    },
                    {
                      img: laboImg,
                      title: "service Labo mondial de nettoyage de billets de banque",
                      classImg: 'warda',
                      classH6: 'no'
                    },
                  ].map(({ img, title, classImg, classH6 }) => (<>
                    <img src={img} style={{ width: '50px', height: '50px' }} className={classImg} />
                    <h6 className={classH6}>{title}</h6>
                    <hr />
                  </>))
                }
              </div>
            </div>
          </div>

          <div className="col-lg-8" >
            <div className="row">
              <div className="col-md-8 ps-1 pe-1">
                <div className=" secteur card w-100 mt-2" >
                  <div className="row g-0">
                    <div className="col-md-7">
                      <a href="#"><img src={huileImg} alt="huile" className="w-100" /></a>
                    </div>
                    <div className="col-md-5">
                      <div className="card-body">
                        <h5 className="card-title text-light text-center pt-5 pb-5">Industries agroalimentaires</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" secteur card  w-100 mt-2">
                  <div className="row g-0">
                    <div className="col-md-7">
                      <a href="#"><img src={stetoscopeImg} alt="stétoscope" className="w-100" /></a>
                    </div>
                    <div className="col-md-5">
                      <div className="card-body">
                        <h5 className="card-title text-light text-center pt-5 pb-5">Santé et hygiène</h5>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="d-grid gap-2">
                  <button className="bigbutton btn mt-2 p-2 text-light" type="button" style={{ backgroundColor: 'rgb(7,45,99)', borderRadius: '5px' }} ><h5>Parcourir les secteurs</h5></button>
                </div>
              </div>



              <div className="col-md-4  ps-1 pe-1">
                <div className=" secteur card w-100 mt-2" >
                  <a href="#"><img src={buildingImg} className="card-img-top" alt="building" /></a>
                  <div className="card-body">
                    <h5 className="card-title text-light text-center">Batiments et construction</h5>
                  </div>
                </div>

                <div className="secteur card w-100 mt-2" >
                  <a href="#"><img src={carotImg} className="card-img-top" alt="carot" /></a>
                  <div className="card-body">
                    <h5 className="card-title text-light text-center" >Agriculture</h5>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-5">Découvrez notre sélection de produits</h3>
            <p className="mb-5">Un extrait des catalogues B2B des fournisseurs et fabricants présents sur Investii.</p>

      
          <div id="carouselExampleControls" className="carousel slide mb-5" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <div className="row">
        <div className="col-md-4  pe-1 ps-3 ">
          <div className=" produit card w-100 h-100 ">
            <img src={boite} className="card-img-top w-100 h-75 " alt="..." />
            <div className="card-body">
              <p className="card-text" style={{textAlign: 'center', color: 'rgb(7, 45, 99)'}}>Boite de conserve</p>
            </div>
          </div>
        </div>
        <div className="col-md-4  pe-1 ps-1">
          <div className=" produit card w-100 h-100">
            <img src={fibre} className="card-img-top w-100 h-75" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{textAlign: 'center', color: 'rgb(7, 45, 99)'}}>Fibre optique matricielle ‏</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 pe-3 ps-1">
          <div className="produit card w-100 h-100">
            <img src={grue} className="card-img-top  w-100 h-75" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{textAlign: 'center', color: 'rgb(7, 45, 99)'}}>Grue Pliable En V - Cu 650 Kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className="row">
        <div className="col-md-4  pe-1 ps-3">
          <div className="produit card w-100 h-100">
            <img src={ceinture} className="card-img-top w-100 h-75 " alt="..." />
            <div className="card-body">
              <p className="card-text" style={{textAlign: 'center', color: 'rgb(7, 45, 99)'}}>Gibaud Ceinture thoracique </p>
            </div>
          </div>
        </div>
        <div className="col-md-4  pe-1 ps-1">
          <div className="produit card w-100 h-100">
            <img src={fenetre} className="card-img-top w-100 h-75" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{textAlign: 'center', color: 'rgb(7, 45, 99)'}}>Baie Coulissante ALU ‏</p>
            </div>
          </div>
        </div>
        <div className="col-md-4  pe-3 ps-1">
          <div className="produit card w-100 h-100">
            <img src={superdiet} className="card-img-top  w-100 h-75" alt="..." />
            <div className="card-body">
              <p className="card-text" style={{textAlign: 'center', color: 'rgb(7, 45, 99)'}}>Super Diet Bio glycémie </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

            
          </div>

          <div className="col-lg-2 mt-2 pt-5 hidden-div" style={{ backgroundColor: 'rgba(77, 77, 77, 0.062)' }}>
     
            <Pub gifImage={megaPaveSofakImg} />
            <Pub gifImage={pubImg} />
            <Pub gifImage={pubImg} />

          </div>
          

        </div>
      </div>

      <div className="row" style={{ backgroundColor: 'rgb(7, 45, 99)' , marginRight : '0'  }}>
        <div className="col-md-2 " >
          <img src={spriteImg} className="  w-100 p-5 " />
        </div>
        <div className="col-md-2 ">
          <img src={samsungImg} className=" w-100 p-5" />
        </div>
        <div className="col-md-2 pt-4 ">
          <img src={sonyImg} className=" w-100  p-5"  />
        </div>
        
        <div className="col-md-2 ">
          <img src={nestléImg} className=" w-100 p-5" />
        </div>
        <div className="col-md-2  ">
          <img src={safariImg} className=" w-100 p-5 " />
        </div>
        <div className=" vista col-md-2 ">
          <img src={vistaImg} className="  w-100 p-5" />
        </div>
      </div>
     
    </Layout >
  )
}

export default About