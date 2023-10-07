import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [people, setPeople] = useState(undefined);

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    const fetch = async () => {
      const planetsRequest = axios.get(urlPlanets);
      const peopleRequest = axios.get(urlPeople);
      
      const promiseResult = await Promise.all([planetsRequest, peopleRequest])
      
      const [planets, people] = promiseResult;
      const mappedPeoplePlannets = people.data.map(person => {
        const world = planets.data.find(planet => planet.id === person.homeworld);
          return {
            ...person,
            homeworld: world ? world : {}
          }
        });

        setPeople(mappedPeoplePlannets)
    }

    fetch();

  }, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people ? people.map(person => <Character key={person.id} {...{...person}}/>) : <p>no data</p>}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
