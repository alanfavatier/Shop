import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getByName, getUsers } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch(); //con esto envio una accion a mi store
  const allUsers = useSelector((state) => state.allUsers); //con este useSelector voy a indicarle a mi componente a que estado quiero estar subscripto. De esta manera le estoy diciendo a mi componente que este pendiente a cualquier cambio que suceda en el estado allUsers , este estado se encuentra en mi reducer.
  const [searchString, setSearchString] = useState(""); //creo un estado local que corresponde al string que voy a escribir dentro de mi input cuando busco.

  function handleChange(e) {
    //creo una fucion que me va setear lo que escriba en el input
    e.preventDefault();
    setSearchString(e.target.value);
  }

  /* ESTO ES PARA EL FILTRO PARA LA BDD */

  function handleSubmit(e) {//en el momento que le de click en buscar  se va a despachar mi accion getByName con el estado searchString.De esta manera se va a manar el nombre que esta dentro de mi barra de busqueda.
    e.preventDefault();
    dispatch(getByName(searchString))
  }

  /*ESTO ES PARA EL FILTRO SOBRE EL ESTADO */
  /*   //ESTAS FUNCIONALIDADES SON PARA MI BARRA DE BUSQUEDA. ESTAS LAS DEFINO ACA PARA QUE SEAN GENERICAS Y PUEDA MANDARLAS POR PROPS A CUALQUIER COMPONENTE 
  const [filtered, setFiltered] = useState(allUsers); //creo un estado local que toma a mi estado global allUsers este estado va a ser igual a todos mis usuarios para que al principio cuando monto mi componente quiero que filtered sea todos mis usuarios.
  const [searchString, setSearchString] = useState("");//creo un estado local que corresponde al string que voy a escribir dentro de mi input cuando busco.

  function handleChange(e) { //creo una fucion que me va setear lo que escriba en el input
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e){ //cuando le de click al boton buscar hace un filtrado de todos los usuarios con el nombre que le indico al searchString.
    e.preventDefault()

    const filtered= allUsers.filter(user=> user.name.includes(searchString))
    setFiltered(filtered)// modifica el estado filtered con los usuarios que coincidan con el nombre.
  }
 */

  useEffect(() => {
    // en este punto cuando mi componente se monta va a enviar la accion getUsers a mi reducer , el reducer va a verificar que tipo / caso de accion es y modifica el payload con el resultado y se lo devuelve a todos los componentes que estan subscriptos.
    dispatch(getUsers());
    /*  return (()=>{
      clearDetail()// esto permite limpiar el estado cuando se desmonta
    }) */
  }, [dispatch]); //como segundo parametro mi useEffect toma un array de dependencia que se encarga de decidir en que momento quiero que se ejecute la accion. en este caso se ejecuta solamente cuando se hace un dispatch.

  return (
    <div className={styles.home}>
      <h2 className={styles.title}> Titulo</h2>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allUsers={allUsers} />
      {/* envio a mis usuarios por props a mis tarjetas */}
    </div>
  );
};

export default Home;
