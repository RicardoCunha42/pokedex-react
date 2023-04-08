import PokeCard from '../PokeCard';
import './TypeGroup.css'

const TypeGroup = (props) => {
    return (
        props.pokemons.length > 0 && <section className='groupType'>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='pokemons'>
                {props.pokemons.map(pokemon => <PokeCard key={pokemon.name} name={pokemon.name} 
                    image={pokemon.image} primaryColor={props.primaryColor}/>)}
            </div>
            
        </section>
    )
}

export default TypeGroup;