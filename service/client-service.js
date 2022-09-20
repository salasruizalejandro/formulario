
//5. funcion crear nueva linea donde se incluye los datos al html
const crearNuevaLinea = (nombre, correoElectronico, edad, productodeInteres, recomendacion, mediodeComunicacion, queproductoNecesita, comentarios) =>{
    const linea = document.createElement("div");
    const content = `
            <h3>NumeroCliente</h3>
            <h3>Nombre:  ${nombre}</h3>
            <h3>correo electronico:  ${correoElectronico}</h3>
            <h3>edad: ${edad}</h3>
            <h3>Producto Interes: ${productodeInteres}</h3>
            <h3>recomendaciones: ${recomendacion}</h3>
            <h3>medio de comunicacion: ${mediodeComunicacion}</h3>
            <h3>que producto necesita: ${queproductoNecesita}</h3>
            <h3>comentarios: ${comentarios}</h3>
            <h3>comentarios: ${comentarios}</h3>
            
    `;
    linea.innerHTML = content;
    return linea;
}

// 6.recorrer todo el arbol de Dom y llevarnos al elemento data-tabla

const tabla = document.querySelector("[data-tabla]")




// abrir http (metodo, url)
// CRUD -- METODOS HTTP
//CREATE - POST
//READ - GET
//UPDATE - PUT / PATCH
//DELETE - DELETE

//API FETCH
const listaClientes = () =>  fetch("http://localhost:3000/cliente").then((respuesta) => respuesta.json());



listaClientes().then((data) =>{
    //7. se recibe los perfiles de cada uno de los clientes en j.son
    data.forEach( perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.correoElectronico, perfil.edad, perfil.productodeInteres, perfil.recomendacion, perfil.mediodeComunicacion, perfil.queproductoNecesita, perfil.comentarios)
        tabla.appendChild(nuevaLinea)
    });
}).catch((error) => alert("Ocurrio un error"))
    


