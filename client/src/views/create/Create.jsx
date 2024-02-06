/* import React, { useState } from "react";

const Create = () => {

  const [input, setInput]= useState({
    email:"",
    name:"",
    phone:""
  })
  const [error, setError]= useState({
    email:"",
    name:"",
    phone:""
  })

const validate=(input)=>{
  if (){

    console.log("Error en el email");
  }
  console.log("Tdo OK");
}

  function handleChange(e){
    
    setInput({...input, [e.target.name]:e.target.value}) //con esto hago que el input se setee con los valores que escribo , pero como tengo varios inputs le pongo ...input para que no se pisen los valores anteriores,
    
    validate({
      ...input,
      [e.target.name]:e.target.value //esto lo hago para que al mismo tiempo que estoy escribiendo tambien estoy validando
    })
   
  }
  return (
    <div>
      <form action="" onSubmit={""}>
        <div>
          <label htmlFor="">Nombre
            <input type="text" name="name" value={input.value} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label htmlFor="">Email
            <input type="text" name="email" value={input.value} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label htmlFor="">Telefono
            <input type="text" name="phone" value={input.value} onChange={handleChange}/>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Create; */
