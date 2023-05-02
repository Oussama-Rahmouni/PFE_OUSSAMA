import React,{useState}from 'react'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




 function Pub(props){
    const [show,setShow]=useState(true)
    return (
<div className="publicité mt-5">
{
  show ? <img src={props.gifImage} className=" w-75 d-flex float-end"/> :""
}
 {
   show ? <FontAwesomeIcon className="close" icon={faWindowClose} 
 onClick={()=>setShow(false)}  /> : ""
 } 
 </div> 

    ); 
    }
    export default Pub;