import React from 'react'
import { GetPokemonByNameOrId } from '../../../../Services/Api';
import styles from './Card.module.css';

const Card = ( {pokemonName} ) => {
    const [id, setId] = React.useState(0);
    const [frontImg, setFrontImg] = React.useState('');
    const [backImg, setBackImg] = React.useState('');
    const [stats, setStats] = React.useState([]);
    const [types, setTypes] = React.useState([]);

    React.useEffect(()=>{
        async function getAll(){
            const response =  await GetPokemonByNameOrId(pokemonName);
            const {id, sprites, stats, types} = response;
            const {front_default, back_default} = sprites;
            setId(id);
            setFrontImg(front_default);
            setBackImg(back_default);
            setStats(stats);
            setTypes(types);
            console.log(response)
        } 
        getAll()
    },[pokemonName])
  return (
    pokemonName &&( 
        <div className={`${styles.cardBody}`}>
            <div className={`${styles.cardStats}`}>

            </div>
            <div className={`${styles.cardImage}`}>
                
            </div>
            <p>{id}</p>
            <p>{frontImg}</p>
            <p>{backImg}</p>
            <p>{pokemonName}</p>
        </div>
    )
  )
}

export default Card