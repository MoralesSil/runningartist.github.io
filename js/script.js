/* scripts.js */

// Función para mostrar un mensaje de éxito al enviar el formulario de contacto
function handleSubmit(event) {
    event.preventDefault();
    alert("¡Mensaje enviado con éxito!");
  }
  
  // Event listener para el formulario de contacto
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", handleSubmit);
  