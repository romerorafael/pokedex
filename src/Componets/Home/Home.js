import React from 'react'
import bannerMobile from  '../../Assets/Images/bannermobile.png';
import bannerDesktop from '../../Assets/Images/bannerdesktop.png';
import styles from './Home.module.css';
import useMedia from '../../Hooks/UseMedia';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let mobile = useMedia("tablet");
  const navigate = useNavigate();

  return (
    <section className={`${styles.container}`}>
      <div className={`${mobile ? styles.containerTextosMobile : styles.containerTextosDesktop }`}>
        <h1><span>Find</span> all your favorite <span>Pokemon</span></h1>
        <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
        <button className={`${mobile ? styles.buttonMobile : styles.button }`} onClick={() =>  navigate("/pokedex")}>See Pokemons</button>
      </div>
      <div className={`${mobile ? styles.bannerMobile : styles.bannerDesktop }`} style={{'background': `url(${mobile ? bannerMobile : bannerDesktop}) center center no-repeat`}}></div>
    </section>
  )
}

export default Home