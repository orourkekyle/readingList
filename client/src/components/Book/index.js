import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({title, subtitle, authors, link, description, image, Button}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-itialic">{title}</h3>
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" href={link}>
              View Book
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <ul className="font-italic small">Author(s):
          {this.map(() => (
            <li>{authors}</li>))}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
