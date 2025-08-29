// Preguntas de la trivia
const preguntas = [
  {
    pregunta: "¿Cuál es el planeta más grande del Sistema Solar?",
    opciones: ["Marte", "Júpiter", "Saturno", "Neptuno"],
    respuesta: 1
  },
  {
    pregunta: "¿En qué continente está Egipto?",
    opciones: ["Asia", "África", "Europa", "Oceanía"],
    respuesta: 1
  },
  {
    pregunta: "¿Cuántos colores tiene el arcoíris?",
    opciones: ["5", "6", "7", "8"],
    respuesta: 2
  },
  {
    pregunta: "¿Quién pintó la Mona Lisa?",
    opciones: ["Van Gogh", "Picasso", "Da Vinci", "Dalí"],
    respuesta: 2
  }
];

let preguntaActual = 0;
let puntaje = 0;

const preguntaElem = document.getElementById("pregunta");
const opcionesElem = document.getElementById("opciones");
const siguienteBtn = document.getElementById("siguiente");
const resultadoElem = document.getElementById("resultado");
const juegoElem = document.getElementById("juego");
const puntajeFinal = document.getElementById("puntajeFinal");

// Mostrar pregunta
function mostrarPregunta() {
  let q = preguntas[preguntaActual];
  preguntaElem.textContent = q.pregunta;
  opcionesElem.innerHTML = "";

  q.opciones.forEach((opcion, i) => {
    let btn = document.createElement("button");
    btn.textContent = opcion;
    btn.addEventListener("click", () => seleccionarOpcion(i, btn));
    opcionesElem.appendChild(btn);
  });

  siguienteBtn.disabled = true;
}

// Selección de respuesta
function seleccionarOpcion(indice, boton) {
  let q = preguntas[preguntaActual];
  let botones = opcionesElem.querySelectorAll("button");

  botones.forEach(b => b.disabled = true);

  if (indice === q.respuesta) {
    boton.classList.add("correcta");
    puntaje++;
  } else {
    boton.classList.add("incorrecta");
    botones[q.respuesta].classList.add("correcta");
  }

  siguienteBtn.disabled = false;
}

// Avanzar preguntas
siguienteBtn.addEventListener("click", () => {
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    terminarJuego();
  }
});

// Terminar juego
function terminarJuego() {
  juegoElem.classList.add("oculto");
  resultadoElem.classList.remove("oculto");
  puntajeFinal.textContent = `Tu puntaje final es ${puntaje} de ${preguntas.length} ✅`;
}

// Reiniciar
function reiniciarJuego() {
  preguntaActual = 0;
  puntaje = 0;
  resultadoElem.classList.add("oculto");
  juegoElem.classList.remove("oculto");
  mostrarPregunta();
}

// Iniciar
mostrarPregunta();
