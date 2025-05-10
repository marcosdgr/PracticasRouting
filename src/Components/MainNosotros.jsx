import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardText from "react-bootstrap/esm/CardText";
import "../Css/MainNosotros.css"
const MainNosotros = () => {
  const [personajes, setPersonajes] = useState([]);
  const obtenerPersonajes = async () => {
    try {
      const respuesta = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setPersonajes(respuesta.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPersonajes();
  }, []);

  return (
    <div className="personajes-container">
      <h3>Rick y Morty</h3>

      <div className="cards-grid">
        {personajes.map((personaje) => (
          <Card key={personaje.id} className="personaje-card">
            <Card.Img variant="top" src={personaje.image} />
            <Card.Body>
              <Card.Title>
                #{personaje.id} {personaje.name}
              </Card.Title>
              <Card.Text>{personaje.species}</Card.Text>
              <CardText>{personaje.status}</CardText>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainNosotros;
