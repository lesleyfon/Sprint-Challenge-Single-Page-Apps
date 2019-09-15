import React, { useEffect, useState } from "react";
import {Card, Icon} from 'semantic-ui-react'
import axios from "axios";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(res=>{
        setLocations(res.data.results)
      })
      .catch(console.log)
  }, []);

  return (
    <section className="character-list grid-view">
      {locations.map(location=>{
        console.log(location)
      return (       
        <Card key={location.name}>
            <Card.Content>
              <Card.Header>{location.name}</Card.Header>
              <Card.Description>
                {location.type}: {location.dimension}
              </Card.Description>
            </Card.Content>
            <Card.Content>
                {location.residents.length} residents
            </Card.Content>
        </Card>  )
      })}
    </section>
  );
}
