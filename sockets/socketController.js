const socketController = (cliente) =>{

    console.log('cliente conectado',cliente.id);

    cliente.on('disconnect',cliente =>{

        console.log('cliente desconectado',cliente.id);
    });


    cliente.on('mensajeFrond', ( payload,callback )=>{
        
        const id = 1234;

        callback({id});// funcion que mando el frond , la ejecuto, tambien se puede devolver objetos


        // enviar msj desde el server , cuando llegue msj del frond
        //this.io.emit('msj-back',payload); si estamos en el archivo del server 
        
        cliente.broadcast.emit('msj-back',payload);// ya no tenemos dependencia del this.io
    });

   
   
};

module.exports = {socketController}