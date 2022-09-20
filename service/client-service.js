
// CRUD -- METODOS HTTP
//CREATE - POST
//READ - GET
//UPDATE - PUT / PATCH
//DELETE - DELETE

//API FETCH
const listaClientes = () =>  fetch("http://localhost:3000/cliente").then((respuesta) => respuesta.json());


export const clienteServices = {
    listaClientes,
};

    


