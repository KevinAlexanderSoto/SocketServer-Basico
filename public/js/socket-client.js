console.log('desde el client ');

const socketClient = io();

// referencias HTML 
const online = document.querySelector('#lblonline');
const offline = document.querySelector('#lbloffline');

const input     = document.querySelector('#input    ');
const btnenviar = document.querySelector('#btnenviar');
//client side 
socketClient.on('connect',()=>{

    console.log('conectado');
    offline.style.display = 'none';
    online.style.display = '';

});

socketClient.on('disconnect',()=>{

    console.log('desconectado');
    offline.style.display = '';
    online.style.display = 'none';
});

socketClient.on('msj-back',(payload)=>{
    console.log(payload);
});

btnenviar.addEventListener('click',()=>{

    const mensaje =  input.value; 
    const payload = {
        mensaje,
        id : '123dded',
        date : new Date().getTime()
    };
    //para enviar un msj al server 
    socketClient.emit('mensajeFrond', payload ,(id)=>{
            // este callback se recibe en el back y el back lo ejecuta y manda el parametro id 
            console.log('desde el server ' + id);
    });
});