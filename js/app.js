/*Crear un constructor alumno e instanciar los 22 alumnos de la clase de daw
Crear un div contenedor de cartas vacíos y un botón generar. 
El botón generar debe insertar una nueva carta en container que muestre los atributos 
de un alumno elegido de manera aleatoria. Hay que verificar que ese alumno no se ha generado
antes y que el container no esté lleno (no haya más de 22 alumnos). En caso de haber generado ya
 a todos los alumnos, debe aparecer un alert que te diga que no puede generar más. Poner en cada card
  un botón que borre dicha card. */
  import Alumno from "../model/Alumno.js";

  const alumns = [
    new Alumno("DAVID", 20, "DAW"),
    new Alumno("ENRIQUE", 21, "DAW"),
    new Alumno("LUNA", 22, "DAW"),
    new Alumno("ALICIA", 23, "DAW"),
    new Alumno("FERNANDO", 23, "DAW"),
    new Alumno("HUGO", 24, "DAW"),
    new Alumno("JOSÉ ANTONIO", 25, "DAW"),
    new Alumno("ALEJANDRO", 25, "DAW"),
    new Alumno("JUAN ANTONIO", 26, "DAW"),
    new Alumno("JAVIER", 26, "DAW"),
    new Alumno("LAURA", 24, "DAW"),
    new Alumno("DIANA", 25, "DAW"),
    new Alumno("SANTIAGO", 24, "DAW"),
    new Alumno("JOSÉ", 26, "DAW"),
    new Alumno("JAVIER", 26, "DAW"),
    new Alumno("MIGUEL ANGEL", 30, "DAW"),
    new Alumno("IVÁN", 23, "DAW"),
    new Alumno("JOSÉ MARÍA", 23, "DAW"),
    new Alumno("FERNANDO", 26, "DAW"),
    new Alumno("JOSÉ ANTONIO", 25, "DAW"),
    new Alumno("SERGIO", 24, "DAW"),
  ];
  
  let div = document.createElement("div");
  let button = document.createElement("button");
  
  div.className = "container";
  button.textContent = "Generar";
  
  let body = document.body;
  
  body.appendChild(div);
  body.appendChild(boton);

  let i = 0;
let arrayAlumn = [];
const mixAlums = alumnos.sort(() => Math.random() - 0.5); //Mezcla aleatoria

boton.addEventListener("click", () => {
  if (i >= mixAlums.length) {
    alert("No se puede generar mas alumnos");
  }

  let actualElement = mixAlums[i];
  i++;

  if (!arrayAlumn.includes(actualElement)) {
    arrayAlumn.push(actualElement);
    let divCard = document.createElement("div");
    divCard.className = "carta";
    divCard.textContent = `Nombre: ${actualElement.nombre}, Edad: ${actualElement.edad}, Curso: ${actualElement.curso}`;
    div.appendChild(divCard);
  } else {
    i--;
  }
});