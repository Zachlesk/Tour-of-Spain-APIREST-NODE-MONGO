const url = "http://localhost:5000/api/premios/all";
const urlUno = "http://localhost:5000/api/premios/getone";
const urlNuevo = "http://localhost:5000/api/premios/add";
const urlBorrar = "http://localhost:5000/api/premios/delete";
const urlActualizar = "http://localhost:5000/api/premios/update";

export const getPremios = async () => {
    try {
        const premios = await fetch(url);
        const datosPremios = await ciclistas.json();
        return datosPremios;
    } catch (error) {
        console.log(error,"Wrong");
    }
};

export const getPremio = async (id) => {
    try {
        const response = await fetch(`${urlUno}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const postPremios = async (premios) => {
    try {
        await fetch(`${urlNuevo}/`,{
            method: "POST",
            body:JSON.stringify(premios),
            headers:{
                'Content-Type':'application/json'
            },
        });
        window.location.href ="../views/premios.html"
    } catch (error) {
        console.log(error,"Wrong");
    }
};


export const deletePremios = async (id) => {
  try {
        await fetch(`${urlBorrar}/${id}`,{
            method:'DELETE',
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href ="../views/premios.html"
    } catch (error) {
        console.log(error, "Wrong");
    }
};


export const putPremios = async (data,id)=>{
    try {
            await fetch(`${urlActualizar}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "../views/premios.html"
    } catch (error) {
        console.log(error);
    }
};