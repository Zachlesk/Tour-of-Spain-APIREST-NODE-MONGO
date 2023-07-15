import mongoose from "mongoose";

const etapasSchema = mongoose.Schema({
    etapa:{
        type: Number,
        require: true,
        trim: true
    },
    fecha: {
        type: String,
        require: true,
        trim: true
    },
    lugar:{
        type: String,
        require: true,
        trim: true
    },
    kilometros:{
        type: String,
        require: true,
        trim: true
    },
    
},
{
    timestamps: true
}
);

const Etapas = mongoose.model("etapas", etapasSchema);

export default Etapas;


