import { faAt, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ProfileLayout from '../../layouts/ProfileLayout'
import ProfilePic from '../../assets/images/avatar.jpg'
import drapeauImg from '../../assets/images/tunisia.png'

import './profile.css'

function Profile() {
  return (
    <ProfileLayout>
      <div className="col-lg-9" style={{ backgroundColor: 'white'}}>
<div className="d-flex mt-5 justify-content-center mb-2 ">     
   <img className="photo " src={ProfilePic} />
</div>
        <div className="card mb-5 ms-lg-5 me-lg-5" style={{ border: '2px solid rgb(9, 157, 181)' }}>
          <div className="card-body  text-center">
            <ul>
              <li className="item">
                <span className="UsernameStyle">Jebali ichraf</span>
              </li><hr />
              <li className="item">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <span className="infos">27 Rue Med ben salah el hechmi</span>
              </li><hr />
              <li className="item">
                <FontAwesomeIcon icon={faPhone} />
                <span className="infos">+216 25918998</span>
              </li><hr />
              <li className="item">
                <img src={drapeauImg} style={{ width: '25px', height: '25px' }} />
                <span className="infos">Tunisie</span>
              </li><hr />
              <li className="item">
                <FontAwesomeIcon icon={faAt} />
                <span className="infos">Ichraf.jbeli@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
    </ProfileLayout >

  )
}

export default Profile
