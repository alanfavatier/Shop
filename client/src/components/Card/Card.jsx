import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";//chequear esta importacon


const Card = ({ user }) => {
  //recibo por prop a los usuarios
  const { name, email, phone, id } = user;
  return (
    <div className={styles.cardContainer}>
      <Link to={`/${id}`}>
        <h2>Nombre: {name} </h2>
        <p>Email: {email} </p>
        <p>Telefono: {phone} </p>
      </Link>
    </div>
  );
};

export default Card;
