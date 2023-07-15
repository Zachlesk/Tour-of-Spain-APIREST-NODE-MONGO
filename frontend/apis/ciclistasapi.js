const url = "http://localhost:5000/api/ciclistas/all";
const urlUno = "http://localhost:5000/api/ciclistas/one";
const urlNuevo = "http://localhost:5000/api/ciclistas/add";
const urlBorrar = "http://localhost:5000/api/ciclistas/remove";
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

export const getCiclista = async (ciclistaID) => {
    try {
        const response = await fetch(`${urlUno}/${ciclistaID}`);
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


export const deleteCiclistas = async (ciclistaID) => {
  try {
        await fetch(`${urlBorrar}/${ciclistaID}`,{
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


export const putCiclistas = async (data,ciclistaID)=>{
    try {
            await fetch(`${urlActualizar}/${ciclistaID}`,{
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