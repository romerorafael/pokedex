import React from 'react'
import Card from './Card/Card';
import { GetPokemonByPage } from '../../../Services/Api';
import styles from './Cards.module.css';

function Cards({page, limit, setInfinite}) {
  const [response, setResponse] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  
  React.useEffect(()=>{
    async function getAll(){
      setOffset(page * 9);
      const request =  await GetPokemonByPage(limit, offset);
      const {results} = request;
      setResponse(results);   
      setInfinite(request == null)
    } 
    getAll()
  }, [offset, limit])

  return (
    <>      
      <div className={styles.cardsContainer}>
        {response && response.map((pokemon)=> <Card pokemonName={pokemon.name}></Card>)}
      </div>
    </>
  )
}

export default Cards
