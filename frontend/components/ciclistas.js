import { getCiclistas, getCiclista, postCiclistas, deleteCiclistas, putCiclistas } from "../apis/ciclistasapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});


    //Load
async function loading() {
    const ciclistas = await getCiclistas();
    const contenedor = document.querySelector(".cardisitas");
    ciclistas.forEach((element) => {
        const {_id, nombre, apodo, nacionalidad, equipo, disciplina, tipo} = element;
        contenedor.innerHTML+=`
        <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                <h5 class="card-title d-flex justify-content-center"> 🚴‍♂ ${nombre} </h5>
                <p class="card-text"> 
                <ul style="list-style: none;>
                <li> <p class="apodo"> <b> Apodo: </b> ${apodo}</p> </li>
                 <li><p class="nacionalidad"> <b> Nacionalidad: </b> ${nacionalidad}</p></p> </li>
                 <li><p class="equipo"> <b> Equipo: </b> ${equipo}  </p> </li>
                 <li><p class="disciplina"> <b> Disciplina: </b> ${disciplina}</p> </li>
                 <li><p class="tipo"> <b> Tipo: </b> ${tipo}</p> </li>
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
const formulario = document.querySelector("#formCiclistas");
formulario.addEventListener("submit", insertCiclistas);

function insertCiclistas(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const apodo = document.querySelector("#apodo").value;
  const nacionalidad = document.querySelector("#nacionalidad").value;
  const equipo = document.querySelector("#equipo").value;
  const disciplina = document.querySelector("#disciplina").value;
  const tipo = document.querySelector("#tipo").value; 

  const registro = {
    nombre,
    apodo,
    nacionalidad,
    equipo,
    disciplina,
    tipo
  };


  if (validacion(registro)) {
    alert("¡Ingresa todos los datos!");
  } else {
    alert("Los datos del ciclista han sido guardados exitosamente.");
    return postCiclistas(registro);
}
};

function validacion(object) {
  return !Object.values(object).every((element) => element !== "");
};


//Delete
const eliminar = document.querySelector(".cardisitas");
eliminar.addEventListener("click",borrarCiclista);

function borrarCiclista(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idCiclista = e.target.getAttribute("id");
        const confir = confirm("¿Quieres eliminar este ciclista?");
        if (confir) {
            deleteCiclistas(idCiclista);
        }
    }
}


//One
const infoCategoria = document.querySelector(".cardisitas");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if (e.target.classList.contains("actualizar")) {
        const id = e.target.getAttribute("id");
        const informacion = await getCiclista(id);

        const {_id, nombre,apodo, equipo,nacionalidad, disciplina, tipo} = informacion;

        const nombreEdit = document.querySelector('#nombreEdit');
        const apodoEdit = document.querySelector('#apodoEdit');
        const equipoEdit = document.querySelector('#equipoEdit');
        const nacionalidadEdit = document.querySelector('#nacionalidadEdit');
        const disciplinaEdit = document.querySelector('#disciplinaEdit');
        const tipoEdit = document.querySelector('#tipoEdit');
        const idEdit = document.querySelector('#idEdit');

        nombreEdit.value = nombre;
        apodoEdit.value = apodo;
        equipoEdit.value = equipo;
        nacionalidadEdit.value = nacionalidad;
        disciplinaEdit.value = disciplina;
        tipoEdit.value = tipo;
        idEdit.value = _id; 
    }
};


//Update
const editar = document.querySelector("#formEditCiclista");
editar.addEventListener('submit', actualizar)

function actualizar(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const nombre = document.querySelector('#nombreEdit').value;
    const apodo = document.querySelector('#apodoEdit').value;
    const equipo = document.querySelector('#equipoEdit').value;
    const nacionalidad = document.querySelector('#nacionalidadEdit').value;
    const disciplina = document.querySelector('#disciplinaEdit').value;
    const tipo = document.querySelector('#tipoEdit').value;

    const datos ={
        nombre,
        apodo,
        equipo,
        nacionalidad,
        disciplina,
        tipo
    }

    alert('Datos editados correctamente');

    return putCiclistas(datos,id);
}; 