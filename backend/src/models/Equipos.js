import mongoose from "mongoose";

const equiposSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    codigo:{
        type: String,
        require: true,
        trim: true
    },
    pais:{
        type: String,
        require: true,
        trim: true
    },
    disciplina:{
        type: String,
        require: true,
        trim: true
    },
    categoria:{
        type: String,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Equipos = mongoose.model("equipos", equiposSchema);

export default Equipos;
