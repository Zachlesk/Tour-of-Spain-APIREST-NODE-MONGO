const url = "http://localhost:5000/api/equipos/all";
const urlUno = "http://localhost:5000/api/equipos/getone";
const urlNuevo = "http://localhost:5000/api/equipos/add";
const urlBorrar = "http://localhost:5000/api/equipos/delete";
const urlActualizar = "http://localhost:5000/api/equipos/update";

export const getEquipos = async () => {
    try {
        const equipos = await fetch(url);
        const datosEquipos = await equipos.json();
        return datosEquipos;
    } catch (error) {
        console.log(error,"Wrong");
    }
};

export const getEquipo = async (id) => {
    try {
        const response = await fetch(`${urlUno}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const postEquipos = async (equipos) => {
    try {
        await fetch(`${urlNuevo}/`,{
            method: "POST",
            body:JSON.stringify(equipos),
            headers:{
                'Content-Type':'application/json'
            },
        });
        window.location.href ="../views/equipos.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deleteEquipos = async (id) => {
  try {
        await fetch(`${urlBorrar}/${id}`,{
            method:'DELETE',
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href ="../views/equipos.html"
    } catch (error) {
        console.log(error, "Wrong");
    }
};


export const putEquipos = async (data,id)=>{
    try {
            await fetch(`${urlActualizar}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "../views/equipos.html"
    } catch (error) {
        console.log(error);
    }
};