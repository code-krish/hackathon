import React, { useState } from "react";
import "./PizzaCard.css";
import { Modal } from "react-bootstrap";



function PizzaCard({pizza}) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);






  return (
    <div className="pizzaCard-container shadow-lg p-3 mb-5 bg-body rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid pizza-img" />
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(item) => {
              setVarient(item.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="m-1 w-100">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(item) => {
              setQuantity(item.target.value);
            }}
          >
            {[...Array(10).keys()].map((obj, index) => {
              return <option value={index + 1}> {index + 1} </option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2">
            Price: ₹{pizza.prices[0][varient] * quantity}
          </h1>
        </div>
        <div className="m-1 w-100">
         {
             <button className="btn btn-danger">ADD TO CART</button>
         }

         
        </div>
      </div>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body >
        <img src={pizza.image} className="img-fluid viewScreen-img" />
        <p> {pizza.description} </p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PizzaCard;
