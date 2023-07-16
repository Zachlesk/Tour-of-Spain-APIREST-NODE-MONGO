const url = "http://localhost:5000/api/etapas/all";
const urlUno = "http://localhost:5000/api/etapas/getone";
const urlNuevo = "http://localhost:5000/api/etapas/add";
const urlBorrar = "http://localhost:5000/api/etapas/delete";
const urlActualizar = "http://localhost:5000/api/etapas/update";

export const getEtapas = async () => {
    try {
        const etapas = await fetch(url);
        const datosEtapas = await etapas.json();
        return datosEtapas;
    } catch (error) {
        console.log(error,"Wrong");
    }
};

export const getEtapa = async (id) => {
    try {
        const response = await fetch(`${urlUno}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const postEtapas = async (etapas) => {
    try {
        await fetch(`${urlNuevo}/`,{
            method: "POST",
            body:JSON.stringify(etapas),
            headers:{
                'Content-Type':'application/json'
            },
        });
        window.location.href ="../views/etapas.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deleteEtapas = async (id) => {
  try {
        await fetch(`${urlBorrar}/${id}`,{
            method:'DELETE',
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href ="../views/etapas.html"
    } catch (error) {
        console.log(error, "Wrong");
    }
};


export const putEtapas = async (data,id)=>{
    try {
            await fetch(`${urlActualizar}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "../views/etapas.html"
    } catch (error) {
        console.log(error);
    }
};