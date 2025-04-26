// Obtén los elementos
const boton = document.getElementById("cambiarMensajeBtn");
const mensaje = document.getElementById("mensaje");

// Agrega un evento al botón
boton.addEventListener("click", () => {
    mensaje.textContent = "¡Bien hecho! Ahora estás listo para lo que sigue.";
    mensaje.style.color = "#ff6f61";  // Color suave
    mensaje.style.fontSize = "2rem";

    // Efecto de expansión del contenedor
    const container = document.querySelector(".container");
    container.style.transform = "scale(1.05)";
    container.style.transition = "transform 0.5s ease";

    // Regresar a su tamaño original
    setTimeout(() => {
        container.style.transform = "scale(1)";
    }, 500);

    // Efecto de pulsación en el botón
    boton.style.transform = "scale(1.1)";
    setTimeout(() => {
        boton.style.transform = "scale(1)";
    }, 200);
});
