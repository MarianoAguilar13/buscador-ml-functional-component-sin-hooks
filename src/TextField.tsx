import React from "react";
import ReactDOM from "react-dom";

function TextField(props) {
  return (
    <div className="contenedor-form__fieldset">
      <label className="contenedor-form__label">{props.text}</label>
      <input
        className="contenedor-form__input-text"
        name={props.nameInput}
        type={props.type}
      />
    </div>
  );
}

export { TextField };
