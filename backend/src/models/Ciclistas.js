import mongoose from "mongoose";

const cliclistasSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apodo: {
        type: String,
        require: true,
        trim: true
    },
    edad:{
        type: Number,
        require: true,
        trim: true
    },
    nacionalidad:{
        type: String,
        require: true,
        trim: true
    },
    equipo:{
        type: String,
        require: true,
        trim: true
    },
    disciplina:{
        type: Number,
        require: true,
        trim: true
    },
    tipo:{
        type: Number,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Ciclistas = mongoose.model("ciclistas", cliclistasSchema);

export default Ciclistas;