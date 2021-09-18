const express = require('express');
const cors = require('cors');

const {socketController} = require('../sockets/socketController');
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //configuracion para el websocket 
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {};

        this.middlewares();

        this.routes();

        //socket events 

        this.socketsEvents();
    }

    middlewares(){

        this.app.use(cors());

        this.app.use(express.static('public'));
    }

    routes(){

        //this.app.use(this.paths.user,require('ruta de las peticiones'))
    }

    socketsEvents(){

        this.io.on('connection',socketController);

       
    }

    listen(){
        this.server.listen(this.port , ()=>{
            console.log('servidor corriendo en puerto',this.port);
        })
    }

}

module.exports = Server;
