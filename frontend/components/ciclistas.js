import { obtenerCiclistas, nuevoCiclista, deleteCiclista, editarCiclista } from "../apis/ciclistasapi.js";


document.addEventListener("DOMContentLoaded", () => {
    mostrarLista()

});


/* LISTAR CATEGORIAS  - CRUD (R) */

async function mostrarLista() {
    const categorias = await obtenerCiclistas();
    const contenedor = document.querySelector("main");
    categorias.forEach((categoria) => {
        const {nombre,descripcion,imagen,_id} = categoria
        contenedor.innerHTML+=`
        <div class="card">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            <div class="card__content">
                <p class="card__title">${nombre}
                </p><p class="card__description">${descripcion}<br>${imagen}</p>
                <div class="botones_orden">
                <button class="edit-button update" id="${_id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                <i class="bi bi-pencil"></i>
                </button>
                <button class="delete-button eliminar" id="${_id}">
                <i class="bi bi-trash"></i>
                </button>
                </div>
        </div>
        `
    });
};
/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formulario = document.querySelector("#formulario")
formulario.addEventListener('submit', validarCategoria)

function validarCategoria(e){
    e.preventDefault();
    const CategoriaNombre = document.querySelector("#CategoriaNombre").value;
    const Descripcion = document.querySelector("#Descripcion").value;
    const Imagen = document.querySelector("#Imagen").value;
    const precio = document.querySelector("#precio").value;
    const cantidad = document.querySelector("#cantidad").value;

    const categoria = {
        CategoriaNombre,
        Descripcion,
        Imagen,
        precio,
        cantidad
    }
    if(validate(categoria)){
        alert ('todos los campos son obligatirios')
        return 
        
    }

    nuevaCategoria (categoria)

}





/* ELIMINAR CATEGORIA  - CRUD (D) */

function confirmDelete(e){
    if(e.target.classList.contains('delete')){
        const categoriaID = e.target.getAttribute('idCategoria')
        console.log(categoriaID);
        const confirmar = confirm('¿DESEAS ELIMNAR LA CATEGORIA?')
        if(confirmar){
            deleteCategory(categoriaID)
        }   
    }
}





//EDITAR CATEGORIA - CRUD (U)const 
const nuevosDatos = document.querySelector('#categories')
nuevosDatos.addEventListener('click',actualizar)


function actualizar(e){
    e.preventDefault();
  
    if(e.target.classList.contains('editar')){
        
        const idActualizar= e.target.getAttribute('idActualizar')
        console.log(idActualizar);

        const datosNuw = document.querySelector('#formularioUpdate')
        datosNuw.addEventListener('submit',uppdateCategoria)
    
    function uppdateCategoria(e){
        e.preventDefault();
        
        const  CategoriaNombre = document.querySelector('#CategoriaNombreUpdate').value;
        const  Descripcion = document.querySelector('#DescripcionUpdate').value;
        const  Imagen = document.querySelector('#ImagenUpdate').value;
        const  precio = document.querySelector('#precioUpdate').value;
        const  cantidad = document.querySelector('#cantidadUpdate').value;
        console.log(CategoriaNombre);
        
    
        const datos={
            _id:idActualizar,
            CategoriaNombre,
            Descripcion,
            Imagen,
            precio,
            cantidad
        }
        console.log(datos);
    
        editarCategory(datos)
    }  

    }

    }

 function validate(objeto){
    return !Object.values(objeto).every( element => element !=='');

} 