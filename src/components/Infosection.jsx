import React from 'react'
import image from '../assets/euniter.jpg'
import {TfiEmail} from 'react-icons/tfi'
import {TfiLinkedin} from 'react-icons/tfi'
import '../styles/mystyle.css'


function Infosection() {
    return(
        <div> 
            <img  id='prof-pic' src={image}alt="liz-pic" />
            <h1 id='info-head'>Allen Liz</h1>
            <h2 id='info-desc'>UI/UX Designer</h2>
            <a id='info-link' href="#">@jolo</a>
            <div className='btns'>

            <a className='btn' id='email' href="#">< TfiEmail />email</a>
            <a className='btn' id='linkedin' href="#"><TfiLinkedin/>linkedin</a>
            </div>
        </div>
    )
}
export default Infosection