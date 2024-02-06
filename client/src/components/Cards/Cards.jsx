import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css"

const Cards = ({allUsers}) => { //recibo los usuarios por props
  

  const usersList = allUsers
  return (
    <div className={styles.cardList}>
      {usersList?.map((user)=>(
         <Card user = {user}/>
         )) } {/* primer verifico si existe userList , luego hago un map para mandarle por prop a mi Card cada uno de los usuarios  */}
       
    </div>
  );
};

export default Cards;
