import { getEtapas, getEtapa, postEtapas, deleteEtapas, putEtapas } from "../apis/etapasapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});


    //Load
async function loading() {
    const etapas = await getEtapas();
    const contenedor = document.querySelector(".cardisitas");
    etapas.forEach((element) => {
        const {_id, etapa, fecha, lugar, kilometros} = element;
        contenedor.innerHTML+=`
        <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">  ✨ ${etapa} </h5>
                <p class="card-text"> 
                <ul style="list-style: none;>
                <li> <p class="fecha"> <b> Fecha: </b> ${fecha}</p> </li>
                 <li><p class="lugar"> <b> Lugar: </b> ${lugar}</p></p> </li>
                 <li><p class="kilometros"> <b> Kilometros: </b> ${kilometros}  </p> </li>
                <div class="detalles">
                <button class="btn btn-warning edit-button actualizar" id="${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                <i class="bi bi-pencil-square"></i>
                </button>
                <button class="btn btn-danger delete-button eliminar" id="${_id}">
                <i class="bi bi-trash3-fill"></i>
                </button>
            </div>
            </div>
          </div>
          </div>
        `
    });
};


 //Insert
const formulario = document.querySelector("#formEtapas");
formulario.addEventListener("submit", insertEtapas);

function insertEtapas(e) {
  e.preventDefault();
  const etapa = document.querySelector("#etapa").value;
  const fecha = document.querySelector("#fecha").value;
  const lugar = document.querySelector("#lugar").value;
  const kilometros = document.querySelector("#kilometros").value;

  const registro = {
    etapa,
    fecha,
    lugar,
    kilometros
  };


  if (validacion(registro)) {
    alert("¡Ingresa todos los datos!");
  } else {
    alert("Los datos de la etapa han sido guardados exitosamente.");
    return postEtapas(registro);
}
};

function validacion(object) {
  return !Object.values(object).every((element) => element !== "");
};


//Delete
const eliminar = document.querySelector(".cardisitas");
eliminar.addEventListener("click",borrarEtapas);

function borrarEtapas(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idEtapas = e.target.getAttribute("id");
        const confir = confirm("¿Quieres eliminar este ciclista?");
        if (confir) {
            deleteEtapas(idEtapas);
        }
    }
}


//One
const infoCategoria = document.querySelector(".cardisitas");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if (e.target.classList.contains("actualizar")) {
        const id = e.target.getAttribute("id");
        const informacion = await getEtapa(id);

        const {_id, etapa , fecha, lugar, kilometros } = informacion;

        const etapaEdit = document.querySelector("#etapaEdit").value;
        const fechaEdit = document.querySelector("#fechaEdit").value;
        const lugarEdit = document.querySelector("#lugarEdit").value;
        const kilometrosEdit = document.querySelector("#kilometrosEdit").value;
        const idEdit = document.querySelector('#idEdit');

        etapaEdit.value = etapa;
        fechaEdit.value = fecha;
        lugarEdit.value = lugar;
        kilometrosEdit.value = kilometros;
        idEdit.value = _id; 
    }
};


//Update
const editar = document.querySelector("#formEditEtapa");
editar.addEventListener('submit', actualizarEtapa)

function actualizarEtapa(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const etapa = document.querySelector('#etapaEdit').value;
    const fecha = document.querySelector('#fechaEdit').value;
    const lugar = document.querySelector('#lugarEdit').value;
    const kilometros = document.querySelector('#kilometrosEdit').value;

    const datos ={
        etapa,
        fecha,
        lugar,
        kilometros
    }

    alert('Datos editados correctamente');

    return putEtapas(datos,id);
}; 