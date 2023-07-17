import { getPremios, getPremio, postPremios, deletePremios, putPremios} from "../apis/premiosapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});


    //Load
async function loading() {
    const premios = await getPremios();
    const contenedor = document.querySelector(".cardisitas");
    premios.forEach((element) => {
        const {_id, clasificacion, descripcion, primerlugar, segundolugar, tercerlugar} = element;
        contenedor.innerHTML+=`
        <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">  ✨ ${clasificacion} </h5>
                <p class="card-text"> 
                <ul style="list-style: none;>
                <li> <p class="apodo"> <b> Descripción: </b> ${descripcion}</p> </li>
                 <li><p class="nacionalidad"> <b> Nacionalidad: </b> ${primerlugar}</p></p> </li>
                 <li><p class="equipo"> <b> Equipo: </b> ${segundolugar}  </p> </li>
                 <li><p class="disciplina"> <b> Disciplina: </b> ${tercerlugar}</p> </li>
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
const formulario = document.querySelector("#formPremios");
formulario.addEventListener("submit", insertPremios);

function insertPremios(e) {
  e.preventDefault();
  const clasificacion = document.querySelector("#clasificacion").value;
  const descripcion = document.querySelector("#descripcion").value;
  const primerlugar = document.querySelector("#primerlugar").value;
  const segundolugar = document.querySelector("#segundolugar").value;
  const tercerlugar = document.querySelector("#tercerlugar").value;


  const registro = {
    clasificacion,
    descripcion,
    primerlugar,
    segundolugar,
    tercerlugar
  };


  if (validacion(registro)) {
    alert("¡Ingresa todos los datos!");
  } else {
    alert("Los datos de los premios han sido guardados exitosamente.");
    return postPremios(registro);
}
};

function validacion(object) {
  return !Object.values(object).every((element) => element !== "");
};


//Delete
const eliminar = document.querySelector(".cardisitas");
eliminar.addEventListener("click",borrarPremios);

function borrarPremios(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idPremios = e.target.getAttribute("id");
        const confir = confirm("¿Quieres eliminar este premio?");
        if (confir) {
            deletePremios(idPremios);
        }
    }
}


//One
const infoCategoria = document.querySelector(".cardisitas");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if (e.target.classList.contains("actualizar")) {
        const id = e.target.getAttribute("id");
        const informacion = await getPremio(id);

        const {_id, clasificacion, descripcion, primerlugar , segundolugar, tercerlugar} = informacion;

        const clasificacionEdit = document.querySelector('#clasificacionEdit');
        const descripcionEdit = document.querySelector('#descripcionEdit');
        const primerlugarEdit = document.querySelector('#primerlugarEdit');
        const segundolugarEdit = document.querySelector('#segundolugarEdit');
        const tercerlugarEdit = document.querySelector('#tercerlugarEdit');
        const idEdit = document.querySelector('#idEdit');

        clasificacionEdit.value = clasificacion;
        descripcionEdit.value = descripcion;
        primerlugarEdit.value = primerlugar;
        segundolugarEdit.value = segundolugar;
        tercerlugarEdit.value = tercerlugar;
        idEdit.value = _id; 
    }
};


//Update
const editar = document.querySelector("#formEditPremio");
editar.addEventListener('submit', actualizarPremio)

function actualizarPremio(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const clasificacion = document.querySelector('#clasificacionEdit').value;
    const descripcion = document.querySelector('#descripcionEdit').value;
    const primerlugar = document.querySelector('#primerlugar').value;
    const segundolugar = document.querySelector('#segundolugarEdit').value;
    const tercerlugar = document.querySelector('#tercerlugarEdit').value;

    const datos ={
        clasificacion,
        descripcion,
        primerlugar,
        segundolugar,
        tercerlugar
    }

    alert('Datos editados correctamente');

    return putPremios(datos,id);
}; 