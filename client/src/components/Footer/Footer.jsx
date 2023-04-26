import React from 'react'
import Logo from '../../img/logo.jpg'
import '../../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" className='logo_smile'/>
      <span>Сайт для подачи заявок в городе Калуга.</span>
    </footer>
  )
}

export default Footer