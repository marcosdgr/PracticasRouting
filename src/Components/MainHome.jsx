import React from "react";
import {Card} from "react-bootstrap"

const MainHome = ({ personas }) => {
  return (
    <div>
      {personas.map((persona) => (
        <Card key={persona.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>
              Nombre: {persona.nombre} {persona.apellido}{" "}
            </Card.Title>
            <Card.Text>Apodo: {persona.apodo}</Card.Text>
            <Card.Text>Edad: {persona.edad}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MainHome;
