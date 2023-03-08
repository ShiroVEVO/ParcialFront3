import { useState } from 'react';

const Card = (props) =>{
  const [nombre, setNombre] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = () => {
    
    if(nombre.startsWith(' ')){
        setError('Por favor, chequea que la información sea correcta(Espacio en blanco Nombre)');
    }else if(nombre.length < 3){
        setError('Por favor, chequea que la información sea correcta(Min Caracteres Nombre)');
    }else if(pokemon.length < 6){
        setError('Por favor, chequea que la información sea correcta(Min Caracteres Pokemon)');
    }else{
        setShowInfo(true);
        setError(null);
    }
    
  }

  return (
    <div>
      <label>Ingresa tu nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br />
      <label>Ingresa el nombre de tu pokemon favorito:</label>
      <input type="text" value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
      <br />
      <button onClick={handleButtonClick}>Mostrar Info</button>
      <br />
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {showInfo && !error && (
        <div>
          <p>Tu nombre es: {nombre}</p>
          <p>Tu pokemon fav: {pokemon}</p>
        </div>
      )}
    </div>
  );
}

export default Card