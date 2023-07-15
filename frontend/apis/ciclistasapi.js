const url = "http://localhost:5000/api/ciclistas/all";
const urlUno = "http://localhost:5000/api/ciclistas/getone";
const urlNuevo = "http://localhost:5000/api/ciclistas/add";
const urlBorrar = "http://localhost:5000/api/ciclistas/delete";
const urlActualizar = "http://localhost:5000/api/ciclistas/update";


export const getCiclistas = async () => {
    try {
        const ciclistas = await fetch(url);
        const datosCiclistas = await ciclistas.json();
        return datosCiclistas;
    } catch (error) {
        console.log(error,"Wrong");
    }
};

export const getCiclista = async (id) => {
    try {
        const response = await fetch(`${urlUno}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const postCiclistas = async (ciclistas) => {
    try {
        await fetch(`${urlNuevo}/`,{
            method: "POST",
            body:JSON.stringify(ciclistas),
            headers:{
                'Content-Type':'application/json'
            },
        });
        window.location.href ="../views/ciclistas.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deleteCiclistas = async (id) => {
  try {
        await fetch(`${urlBorrar}/${id}`,{
            method:'DELETE',
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href ="../views/ciclistas.html"
    } catch (error) {
        console.log(error, "Wrong");
    }
};


export const putCiclistas = async (data,id)=>{
    try {
            await fetch(`${urlActualizar}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "../views/ciclistas.html"
    } catch (error) {
        console.log(error);
    }
};