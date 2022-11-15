import React from 'react'
import {BsTwitter} from "react-icons/bs"
import {TfiLinkedin} from "react-icons/tfi"
import {GrInstagram} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
function Footer() {
    return(
        <div className='footer'> 
        <a href='#' >< BsTwitter className='social-icone' id='twitter' /></a>
        <a href='#' >< GrInstagram className='social-icone' id='instagram'/></a>
        <a href='#' >< TfiLinkedin className='social-icone' id='github'/></a>
        <a href='#' >< BsGithub className='social-icone' id='linkedin'/></a>
        </div>
    )
}
export default Footer