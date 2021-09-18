import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie, handleFilterTitle }) => {
  const firstExample = {
    size: 40,
    value: movie.rate,
    edit: false,
  };
  
  return (
    <div>
      <Card style={{ width: "18rem" }} className="mb-3">
        <Card.Img variant="top" src={movie.posterUrl} height="400" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>

          <ReactStars {...firstExample} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;