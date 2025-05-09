import { WebSocket, WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
// event handler for when a client connects

interface User {
    socket: WebSocket,
    roomId: string
}

let allSockets: User[] = [];


wss.on("connection", (socket) => {

    console.log(`user connected`);


    // is socket pe new message aata hai to ye function call hota hai
    socket.on("message", (message) => {

        const parsedMessage = JSON.parse(message as unknown as string)
        if (parsedMessage.type === "join") {
            console.log("user joined room " + parsedMessage.payload.roomId)
            allSockets.push({
                socket,
                roomId: parsedMessage.payload.roomId
            })
        }
        if (parsedMessage.type === "chat") {

            console.log("user wants to send the message ");

            const currentUserRoom = allSockets.find(x => x.socket == socket)?.roomId
            console.log(currentUserRoom);

            // optimize this
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].roomId === currentUserRoom) {
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }

            }
        }
    })

})



// wss.on("")