import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

  const add = () => {
    if (title && desc && posterUrl && rating) {
      const newMovie = {
        id: Math.random(),
        title: title,
        posterUrl: posterUrl,
        rate: rating,
        description: desc,
      };
      handleAdd(newMovie);
      setTitle("");
      setPosterUrl("");
      setRating("");
      setDesc("");
      handleClose();
    } else {
      alert("Add a movie first please !");
    }
  };

  return (
    <div>
      <Card className="text-center">
       
        <Card.Body>
        
          <Button variant="primary" onClick={handleShow}>
             Add Movie
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter movie description"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Poster</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter poster's URL"
                onChange={(e) => setPosterUrl(e.target.value)}
                value={posterUrl}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie rating"
                onChange={(e) => setRating(e.target.value)}
                value={rating}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
