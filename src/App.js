import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import TypeGroup from './components/TypeGroup';

function App() {

  const pokemonTypes = [
    {
      name: 'Fire',
      primaryColor: '#FF8000'
    },
    {
      name: 'Water',
      primaryColor: '#0080FF' 
    },
    {
      name: 'Grass',
      primaryColor: '#00994c'
    },
    {
      name: 'Air',
      primaryColor: '#c0c0c0'
    },
    {
      name: 'Rock',
      primaryColor: '#404040'
    },
    {
      name: 'Psych',
      primaryColor: '#990099'
    },
    {
      name: 'Normal',
      primaryColor: '#FF9999'
    },
    {
      name: 'Eletric',
      primaryColor: '#CCCC0C'
    }
  ]

  const [pokemons, setPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
  }

  return (
    <div className="App">
      <Banner/>

      <Form type = {pokemonTypes.map(pokemonType => pokemonType.name)} 
        toPokemons = {pokemon => addPokemon(pokemon)}/>

      {pokemonTypes.map(pokemonType => 
        <TypeGroup 
          key={pokemonType.name} 
          name={pokemonType.name} 
          primaryColor={pokemonType.primaryColor}
          pokemons={pokemons.filter(pokemon => pokemon.type === pokemonType.name)}/>)}

      <Footer/>
    </div>
  );
}

export default App;
