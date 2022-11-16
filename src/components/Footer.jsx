import React from 'react'
import {BsTwitter} from "react-icons/bs"
import {TfiLinkedin} from "react-icons/tfi"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
function Footer() {
    return(
        <div className='footer'> 
        <a href='https://mobile.twitter.com/ELIZABE25459620' >< BsTwitter className='social-icone' id='twitter' /></a>
        <a href='#' >< TfiLinkedin className='social-icone' id='linkedin'/></a>
        <a href='https://www.facebook.com/lizarallens.joeallen' >< BsFacebook className='social-icone' id='facebook'/></a>
        <a href='https://github.com/ElizabethAdhiambo' >< BsGithub className='social-icone' id='linkedin'/></a>
        </div>
    )
}
export default Footer