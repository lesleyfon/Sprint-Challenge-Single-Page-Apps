import React, { useEffect, useState } from "react";
import {Card, Image} from 'semantic-ui-react'
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res=>{
        setCharacter(res.data.results)
      })
      .catch(console.log)
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character=>{
        console.log(character)
      return (       
        <Card key={character.name}>
            <Image src ={`${character.image}`}/>
            <Card.Content>
              <Card.Header>{character.name}</Card.Header>
              <Card.Meta>{character.species}</Card.Meta>
              <Card.Description>
                Location: {character.location.name}
              </Card.Description>
              <Card.Description>
                Origin: {character.origin.name}
              </Card.Description>
            </Card.Content>
        </Card>  )
      })}
    </section>
  );
}
