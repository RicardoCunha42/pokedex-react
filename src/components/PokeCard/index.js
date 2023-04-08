import './PokeCard.css'

const PokeCard = ({name, image, primaryColor}) => {
    return (
        <div className='pokeCard'>
            <div className='pokeImage' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className='pokeInfo'>
                <h4>{name}</h4>
            </div>
        </div>
    )
}

export default PokeCard;