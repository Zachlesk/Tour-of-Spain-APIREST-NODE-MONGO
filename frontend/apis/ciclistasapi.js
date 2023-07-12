const url = "http://localhost:5000/ciclistas/all";
const urlNuevo = "http://localhost:5000/ciclistas/add";
const urlBorrar = "http://localhost:5000/ciclistas/remove";
const urlActualizar = "http://localhost:5000/ciclistas/update";


export const obtenerCiclistas = async () => {
    try {
        const ciclistas = await fetch(url);
        const datosCiclistas = await ciclistas.json();
        return datosCiclistas;
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const nuevoCiclista = async (ciclistas) => {
    try {
        await fetch(urlNuevo,{
            method: "POST",
            body:JSON.stringify(ciclistas),
            headers:{'Content-Type':'application/json'}
        });
        window.location.href ="../views/ciclistas.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deleteCiclista = async (ciclistaID) => {
  try {
        await fetch(`${urlBorrar}/${ciclistaID}`,{
            method:'DELETE'
        })
        window.location.href ="../views/ciclistas.html"
    } catch (error) {
        console.log(error);
    }
};


export const editarCiclista = async (datos) => {
    try {
        await fetch(`${urlActualizar}/${datos._id}`, {
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
        window.location.href ="index.html"
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};