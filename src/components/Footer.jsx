import React from 'react'

const Footer = () => {
  return (
    <div className='footerDiv'>
        <div className="socialLinks">
            <a href="https://twitter.com/CCMOD_"><img src="https://icon.horse/icon/twitter.com" alt="tw"/></a>
            <a href="https://github.com/Lakshit-Chiranjiv"><img src="https://icon.horse/icon/github.com" alt="gh"/></a>
            <a href="https://www.linkedin.com/in/lakshit-chiranjiv-sagar-4b0b15198/"><img src="https://icon.horse/icon/www.linkedin.com" alt="li"/></a>
        </div>
        <p>Created by Lakshit | All rights reserved | Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer