/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let nombre = ["Pablo", "Marcos", "Marta", "Maria"];
  let accion = ["se perdió", "se escapó", "se escondió", "estudió"];
  let lugar = ["en la casa", "en la escuela", "en el templo", "en el mar"];
  let indiceNombre = Math.floor(Math.random() * nombre.length);
  let indiceAccion = Math.floor(Math.random() * accion.length);
  let indiceLugar = Math.floor(Math.random() * lugar.length);

  document.querySelector("#excuse").innerHTML =
    nombre[indiceNombre] +
    " " +
    accion[indiceAccion] +
    " " +
    lugar[indiceLugar];
  console.log("Hello Rigo from the console!");
};
