import React from 'react'
import { Pokemon } from '../../models/Pokemon'

interface Props {
   pokemon: Pokemon,
   key: number,
   handleDelete: Function
}

export default function PokemonBox(props:Props) {
  return (
         <div>
            <img src={props.pokemon.img} alt={props.pokemon.name}/>
            <h4>{props.pokemon.name}</h4>
            <p>Level: {props.pokemon.level}</p>
            <p>Health: {props.pokemon.health}</p>
            <p>Damage: {props.pokemon.damage}</p>
            <button onClick={() => {props.handleDelete(props.key)}}>Delete</button>
         </div>
         )
}
