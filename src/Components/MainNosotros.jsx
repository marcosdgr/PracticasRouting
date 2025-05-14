import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardText from "react-bootstrap/esm/CardText";
import "../Css/MainNosotros.css";
const MainNosotros = () => {
  const [personajes, setPersonajes] = useState([]);
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  const obtenerPersonajes = async () => {
    try {
      const respuesta = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setPersonajes(respuesta.data.results);
      setNext(respuesta.data.info.next);
      setPrev(respuesta.data.info.prev);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleClick = () => {};

  const handlePrev = async () => {
    const respuesta = await axios.get(prev);
    setPersonajes(respuesta.data.results);
    setPrev(respuesta.data.info.prev);
    setNext(respuesta.data.info.next);
  };
  const handleNext = async () => {
    const respuesta = await axios.get(next);
    setPersonajes(respuesta.data.results);
    setPrev(respuesta.data.info.prev);
    setNext(respuesta.data.info.next);
  };

  const handleUltimo = async () => {
    const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=42"
    );
    setPersonajes(respuesta.data.results);
    setPrev(respuesta.data.info.prev);
    setNext(respuesta.data.info.next);
  };

  const handlePrimero = async () => {
    const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    setPersonajes(respuesta.data.results);
    setPrev(respuesta.data.info.prev);
    setNext(respuesta.data.info.next);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, []);

  return (
    <div className="personajes-container">
      <h3>Rick y Morty</h3>
      <br />
      {/* <label htmlFor="">Aqui van los personajes</label>
      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Buscar
      </button> */}
      <br />

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
      {prev && (
        <button type="button" onClick={handlePrimero}>
          Primero
        </button>
      )}

      {prev && (
        <button type="button" onClick={handlePrev}>
          Anterior
        </button>
      )}
      {next && (
        <button type="button" onClick={handleNext}>
          Siguiente
        </button>
      )}

      {next && (
        <button type="button" onClick={handleUltimo}>
          Ultimo
        </button>
      )}
    </div>
  );
};

export default MainNosotros;
