import { getEquipos, getEquipo, postEquipos, deleteEquipos, putEquipos } from "../apis/equiposapi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loading();
});


    //Load
async function loading() {
    const equipos = await getEquipos();
    const contenedor = document.querySelector(".cardisitas");
    equipos.forEach((element) => {
        const {_id, nombre, codigo, pais, disciplina, categoria} = element;
        contenedor.innerHTML+=`
        <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">  ✨ ${nombre} </h5>
                <p class="card-text"> 
                <ul style="list-style: none;>
                <li> <p class="codigo"> <b> Código: </b> ${codigo}</p> </li>
                 <li><p class="pais"> <b> Pais: </b> ${pais} </p></p> </li>
                 <li><p class="disciplina"> <b> Disciplina: </b> ${disciplina}</p> </li>
                 <li><p class="categoria"> <b> Categoria: </b> ${categoria}</p> </li>
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
const formulario = document.querySelector("#formEquipos");
formulario.addEventListener("submit", insertEquipos);

function insertEquipos(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const codigo = document.querySelector("#codigo").value;
  const pais = document.querySelector("#pais").value;
  const disciplina = document.querySelector("#disciplina").value;
  const categoria = document.querySelector("#categoria").value; 

  const registro = {
    nombre,
    codigo,
    pais,
    disciplina,
    categoria
  };


  if (validacion(registro)) {
    alert("¡Ingresa todos los datos!");
  } else {
    alert("Los datos del equipo han sido guardados exitosamente.");
    return postEquipos(registro);
}
};

function validacion(object) {
  return !Object.values(object).every((element) => element !== "");
};


//Delete
const eliminar = document.querySelector(".cardisitas");
eliminar.addEventListener("click",borrarEquipo);

function borrarEquipo(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idEquipo = e.target.getAttribute("id");
        const confir = confirm("¿Quieres eliminar este equipo?");
        if (confir) {
            deleteEquipos(idEquipo);
        }
    }
}


//One
const infoCategoria = document.querySelector(".cardisitas");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if (e.target.classList.contains("actualizar")) {
        const id = e.target.getAttribute("id");
        const informacion = await getEquipo(id);

        const {_id, nombre, codigo, pais, disciplina, categoria} = informacion;

        const nombreEdit = document.querySelector('#nombreEdit');
        const codigoEdit = document.querySelector('#codigoEdit');
        const paisEdit = document.querySelector('#paisEdit');
        const disciplinaEdit = document.querySelector('#disciplinaEdit');
        const categoriaEdit = document.querySelector('#categoriaEdit');
        const idEdit = document.querySelector('#idEdit');

        nombreEdit.value = nombre;
        codigoEdit.value = codigo;
        paisEdit.value = pais;
        disciplinaEdit.value = disciplina;
        categoriaEdit.value = categoria;
        idEdit.value = _id; 
    }
};


//Update
const editar = document.querySelector("#formEditEquipo");
editar.addEventListener('submit', actualizarEquipos)

function actualizarEquipos(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const nombre = document.querySelector('#nombreEdit').value;
    const codigo = document.querySelector('#codigoEdit').value;
    const pais = document.querySelector('#paisEdit').value;
    const disciplina = document.querySelector('#disciplinaEdit').value;
    const categoria = document.querySelector('#categoriaEdit').value;

    const datos ={
        nombre,
        codigo,
        pais,
        disciplina,
        categoria
    }

    alert('Datos editados correctamente');

    return putEquipos(datos,id);
}; 