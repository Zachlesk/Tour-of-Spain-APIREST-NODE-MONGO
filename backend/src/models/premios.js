import mongoose from "mongoose";

const premiosSchema = mongoose.Schema({
    clasificacion: {
        type: String,
        require: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    primerlugar:{
        type: String,
        require: true,
        trim: true
    },
    segundolugar:{
        type: String,
        require: true,
        trim: true
    },
    tercerlugar:{
        type: String,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Premios = mongoose.model("premios", premiosSchema);

export default Premios;

