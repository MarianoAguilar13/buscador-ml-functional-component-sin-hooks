import React from "react";
import { LoginForm } from "./LoginForm";
import { ThankYou } from "./ThankYou";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  whenLogin(userData) {
    console.log(
      "Email: ",
      userData.email,
      " Contraseña: ",
      userData.contraseña
    );

    this.setState({
      loggedIn: true,
    });
  }

  //si existe showForm, es que no se realizo la busqueda y por lo tanto
  //debe mostrar el form, si ya se logeo, entonces muestra el thankyou
  render() {
    const showForm = !this.state.loggedIn;

    return showForm ? (
      <div>
        <LoginForm onLogin={(valores) => this.whenLogin(valores)} />
      </div>
    ) : (
      <ThankYou></ThankYou>
    );
  }
}

export { App };
