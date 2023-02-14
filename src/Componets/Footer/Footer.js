import React from 'react'
import styles from './Footer.module.css'
import useMedia from './../../Hooks/UseMedia'

const Footer = () => {
  let mobile = useMedia("mobile");

  return (
    <footer className={`${styles.footer} ${mobile ? styles.column : ''} `}>
      <p> Make with <span aria-label="Coração vermelho" role="img">💗</span> for the PokéSpartans team Platzi Master.</p>
      <p> Replicated by Rafael Romero <span aria-label="Coração vermelho" role="img">💗</span></p>
    </footer>
  )
}

export default Footer