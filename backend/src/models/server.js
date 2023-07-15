import express from "express";
import cors from "cors";
import ciclistasRoutes from '../routes/ciclistas.routes.js';
import equiposRoutes from '../routes/equipos.routes.js';
import etapasRoutes from '../routes/etapas.routes.js';
import premiosRoutes from '../routes/premios.routes.js';
import conexion from '../config/config.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.ciclistasPath = '/api/ciclistas';
        this.equiposPath = '/api/equipos';
        this.etapasPath = '/api/etapas';
        this.premiosPath = '/api/premios';
        this.conexion();
        this.middlewars();
        this.routes();
    }

    async conexion(){
        await conexion();
    }

    middlewars(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.ciclistasPath, ciclistasRoutes);
        this.app.use(this.equiposPath, equiposRoutes);
        this.app.use(this.etapasPath, etapasRoutes);
        this.app.use(this.premiosPath, premiosRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`El server está activo en el puerto ${this.port}`);
        });
    }
}

export default Server;