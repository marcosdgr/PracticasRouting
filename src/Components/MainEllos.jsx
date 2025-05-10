import React, { useState } from 'react';
import "../Css/MainEllos.css"

const MainEllos = () => {
  const [contador, setContador] = useState(0);

  const handleSumar = () => {
    setContador(contador + 1);
  };

  const handleRestar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador-container">
      <p className="contador-value">Contador: {contador}</p>
      <div className="button-container">
        <button className="contador-button" type="button" onClick={handleSumar}>Sumar</button>
        <button className="contador-button" type="button" onClick={handleRestar}>Restar</button>
      </div>
    </div>
  );
};

export default MainEllos;
