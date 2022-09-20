const formulario = document.querySelector("[data-tabla]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const correo = document.querySelector("[data-email]").value;
    const edad = document.querySelector("[data-edad]").value;
    const productoInteres = document.querySelector("[data-opcionesInteres]").value;
    const medioInf = document.querySelector("[data-InformacionNosotros]").value;
    const texto = document.querySelector("[data-comentarioParaNosotros]").value
})