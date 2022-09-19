
//5. funcion crear nueva linea donde se incluye los datos al html
const crearNuevaLinea = (nombre, correoElectronico, edad, productodeInteres, recomendacion, mediodeComunicacion, queproductoNecesita, comentarios) =>{
    const linea = document.createElement("div");
    const content = `
            <h3>NumeroCliente</h3>
            <h3>Nombre</h3>
            <h3>correo electronico</h3>
            <h3>edad</h3>
            <h3>Producto Interes</h3>
            <h3>recomendaciones</h3>
            <h3>medio de comunicacion</h3>
            <h3>que producto necesita</h3>
            <h3>comentarios</h3>
    `;
}



// 1. crear conexion con xmlhttp
const http = new XMLHttpRequest();

// abrir http (metodo, url)
// CRUD -- METODOS HTTP
//CREATE - POST
//READ - GET
//UPDATE - PUT / PATCH
//DELETE - DELETE

//2. crear conexion con json 
http.open("GET", "http://localhost:3000/cliente")

//3. funcion de enviar datos
http.send()

//4 recargar datos de json en consola de Cliente-Servicio
http.onload = () =>{
    const data = http.response
    console.log(data)
}
