import React from "react";
import ReactDOM from "react-dom";
import { TextField } from "./TextField";
import { Button } from "./Button";

function LoginForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //a la funcion dentro de la prop onlogin le paso el parametro del target
    //La cual va a ser llamado por el otro callback de onlogin que es
    //el whenlogin de la app y ahi muestra la data por consola y convierte
    //el state de loggedIn en true
    const userData = {
      email: e.target.email.value,
      contraseña: e.target.contraseña.value,
    };

    props.onLogin(userData);
  };

  return (
    <div className="container-form">
      <form className="buscador-form" onSubmit={handleSubmit} action="">
        <TextField text="Email" type="mail" nameInput="email"></TextField>
        <TextField
          text="Contraseña"
          type="password"
          nameInput="contraseña"
        ></TextField>
        <Button>Ingresar</Button>
      </form>
    </div>
  );
}

export { LoginForm };
