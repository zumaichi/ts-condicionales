import "./style.css";

let puntuacion = 0;

const calcularNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;

const obtenerValorCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? 0.5 : numeroAleatorio;

const obtenerValorUrlCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

const cartaUrl = (numeroAleatorio?: number) => {
  switch (numeroAleatorio) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";

    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const muestraCarta = (numeroAleatorio?: number) => {
  const imagen = document.getElementById("imagenCarta");
  const carta = cartaUrl(numeroAleatorio);
  if (
    imagen !== null &&
    imagen !== null &&
    imagen instanceof HTMLImageElement
  ) {
    imagen.src = carta;
  } else {
    console.error("No se ha encontrado la imagen");
  }
};

const aumentarPuntuacion = (valor: number) => {
  puntuacion += valor;

  const puntuacionElemento = document.getElementById("puntuacion");
  if (puntuacionElemento !== null) {
    puntuacionElemento.innerHTML = `${puntuacion}`;
  } else {
    console.error("No se ha encontrado el elemento de puntuación");
  }
};

const anularReinicio = () => {
  const botonReinicioContenedor = document.getElementById("botonReinicio");
  if (
    botonReinicioContenedor &&
    botonReinicioContenedor instanceof HTMLButtonElement
  )
    botonReinicioContenedor.disabled;
};
const activarReinicio = () => {
  const botonReinicioContenedor = document.getElementById("botonReinicio");
  if (
    botonReinicioContenedor &&
    botonReinicioContenedor instanceof HTMLButtonElement
  )
    botonReinicioContenedor.disabled = false;
};
const deshabilitarBotones = () => {
  const botonDarCartaContenedor = document.getElementById("botonDarCarta");
  const botonPlantarseContenedor = document.getElementById("botonPlantarse");
  const botonReinicioContenedor = document.getElementById("botonReinicio");
  if (
    botonDarCartaContenedor &&
    botonDarCartaContenedor instanceof HTMLButtonElement &&
    botonPlantarseContenedor &&
    botonPlantarseContenedor instanceof HTMLButtonElement &&
    botonReinicioContenedor &&
    botonReinicioContenedor instanceof HTMLButtonElement
  ) {
    botonDarCartaContenedor.disabled = true;
    botonPlantarseContenedor.disabled = true;
    botonReinicioContenedor.disabled = false;
  }
};

const habilitarBotones = () => {
  const botonDarCartaContenedor = document.getElementById("botonDarCarta");
  const botonPlantarseContenedor = document.getElementById("botonPlantarse");
  const botonReinicioContenedor = document.getElementById("botonReinicio");
  if (
    botonDarCartaContenedor &&
    botonDarCartaContenedor instanceof HTMLButtonElement &&
    botonPlantarseContenedor &&
    botonPlantarseContenedor instanceof HTMLButtonElement &&
    botonReinicioContenedor &&
    botonReinicioContenedor instanceof HTMLButtonElement
  ) {
    botonDarCartaContenedor.disabled = false;
    botonPlantarseContenedor.disabled = false;
    botonReinicioContenedor.disabled = true;
  }
};
const activarSguir = () => {
  const botonSguirContenedor = document.getElementById("botonSeguir");
  if (botonSguirContenedor && botonSguirContenedor instanceof HTMLButtonElement)
    botonSguirContenedor.disabled = false;
};
const desactivarSguir = () => {
  const botonSguirContenedor = document.getElementById("botonSeguir");
  if (botonSguirContenedor && botonSguirContenedor instanceof HTMLButtonElement)
    botonSguirContenedor.disabled = true;
};

const mostrarEstado = (puntuacion: number) => {
  const mensajeFinal = document.getElementById("mensaje");
  if (mensajeFinal !== null) {
    if (puntuacion >= 0.5 && puntuacion <= 4) {
      mensajeFinal.innerHTML = "Has sido muy conservador.";
    } else if (puntuacion === 5) {
      mensajeFinal.innerHTML = "Te ha entrado el canguelo eh?";
    } else if (puntuacion >= 6 && puntuacion < 7.5) {
      mensajeFinal.innerHTML = "Casi casi...";
    } else if (puntuacion === 7.5) {
      mensajeFinal.innerHTML = "¡Lo has clavado! ¡Enhorabuena!";
    } else if (puntuacion > 7.5) {
      mensajeFinal.innerText = "Game Over";
    } else {
      mensajeFinal.innerHTML = "¡pulsa dame cata para empezar!";
    }
  }
};
const pedirCarta = () => {
  const numeroAleatorio = calcularNumeroAleatorio();

  const valorNuevaCarta = obtenerValorCarta(numeroAleatorio);
  aumentarPuntuacion(valorNuevaCarta);

  const valorUrlCarta = obtenerValorUrlCarta(numeroAleatorio);

  muestraCarta(valorUrlCarta);
  console.log("puntuacion: ", puntuacion);

  if (puntuacion >= 7.5) {
    mostrarEstado(puntuacion);
    deshabilitarBotones();
  }
};
const reinicio = () => {
  puntuacion = 0;
  document.getElementById("puntuacion")!.innerHTML = `${puntuacion}`;
  habilitarBotones();
  muestraCarta();
  desactivarSguir();
};

const cargarEventos = () => {
  const botonSeguir = document.getElementById("botonSeguir");

  if (
    botonSeguir !== null &&
    botonSeguir !== undefined &&
    botonSeguir instanceof HTMLButtonElement
  ) {
    botonSeguir.disabled = true;

    botonSeguir.addEventListener("click", () => {
      pedirCarta();
    });
  } else {
    console.error("error al seguir");
  }

  const botonDarCarta = document.getElementById("botonDarCarta");

  if (
    botonDarCarta !== null &&
    botonDarCarta !== undefined &&
    botonDarCarta instanceof HTMLButtonElement
  ) {
    botonDarCarta.addEventListener("click", pedirCarta);
  } else {
    console.error("error al dar una carta");
  }
  const botonPlantarse = document.getElementById("botonPlantarse");

  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.addEventListener("click", () => {
      activarReinicio();
      activarSguir();
      deshabilitarBotones();
      mostrarEstado(puntuacion);
    });
  } else {
    console.error("error al plantarte");
  }

  const botonReinicio = document.getElementById("botonReinicio");
  if (
    botonReinicio !== null &&
    botonReinicio !== undefined &&
    botonReinicio instanceof HTMLButtonElement
  ) {
    botonReinicio.disabled = true;
    botonReinicio.addEventListener("click", () => {
      reinicio();
      anularReinicio();
      mostrarEstado(puntuacion);
    });
  } else {
    console.error("Error al inicializar el botón de reinicio");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  cargarEventos();
  muestraCarta();
});
