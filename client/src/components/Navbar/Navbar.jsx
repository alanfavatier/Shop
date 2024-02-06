import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = ({handleChange, handleSubmit}) => {
  return (
    <div className={styles.search}>
      <form onChange= {handleChange} >
        <input type="text"  placeholder='Busqueda' />
        <button type='submit' onClick={ handleSubmit}>Buscar</button>
      </form>
    </div>
  )
}

export default Navbar