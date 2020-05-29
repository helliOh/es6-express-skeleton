export default function socketHandler(socket){
    if(!socket) throw new Error('socketHandler init failed :: no socket');

    console.log('socketHandler binded successfully');

    socket.on('init', (data) =>{
        console.log('init called');

        socket.emit('welcome', `welcome! ${data.name}`);
    });
}