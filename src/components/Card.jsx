import { useState } from 'react';
import styles from './Card.module.css';

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
    <div className={styles.general}>
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
          <p className={styles['error-message']}>{error}</p>
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
/*

import { useState } from 'react';
import styles from './Card.module.css'; // importa el archivo CSS

const Card = (props) => {
  const [nombre, setNombre] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    if (nombre.trim().length === 0 || nombre.trim().length < 3 || pokemon.trim().length < 6) {
      setErrorMessage('Por favor, ingrese valores válidos');
    } else {
      setShowInfo(true);
      setErrorMessage('');
    }
  }

  return (
    <div>
      <label>Ingresa tu nombre:</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <br />
      <label>Input 2:</label>
      <input type="text" value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
      <br />
      <button onClick={handleButtonClick}>Mostrar Info</button>
      <br />
      {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>}
      {showInfo && (
        <div>
          <p>Tu nombre es: {nombre}</p>
          <p>Tu pokemon fav: {pokemon}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
*/