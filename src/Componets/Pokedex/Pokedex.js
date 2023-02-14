import React from 'react'
import Cards from "./Cards/Cards"
import styles from './Pokedex.module.css'

const Pokedex = () => {
  const [infinite, setInfinite] = React.useState(true);
  const [pages, setPages] = React.useState([0]);
  const limit = 9;
  
  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length ]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
  }, [infinite]);

  return (
    <section className={styles.mainContainer} >
      <h1>1200 <span>Pokemons</span> for you to choose your favorite</h1>
      <div className= {`${styles.searchContainer}`}>
       <input/>
      </div>
      {pages.map((page) => (
        <Cards
          key={page}
          page={page}
          limit ={limit}
          setInfinite={setInfinite}
        />
      ))}
    </section>
  );
}

export default Pokedex